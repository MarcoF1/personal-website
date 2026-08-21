import { NextRequest, NextResponse } from "next/server";

// Markdown content negotiation, per acceptmarkdown.com's Next.js recipe.
// The Vary: Accept header must survive onto both branches, and Vercel's edge
// cache only honors Vary when s-maxage puts it in shared-cache mode (see the
// Cache-Control headers in vercel.json and app/index.md/route.ts).
const PRODUCES = ["text/html", "text/markdown"];

type AcceptEntry = { type: string; q: number; specificity: number };

function parseAccept(header: string): AcceptEntry[] {
  return header
    .split(",")
    .map((raw) => {
      const parts = raw
        .trim()
        .split(";")
        .map((s) => s.trim());
      const type = parts[0].toLowerCase();
      let q = 1;
      for (const param of parts.slice(1)) {
        const [name, value] = param.split("=").map((s) => s.trim());
        if (name === "q") {
          const parsed = Number(value);
          if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
        }
      }
      const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
      return { type, q, specificity };
    })
    .filter((entry) => entry.type.length > 0);
}

function matches(entry: AcceptEntry, produced: string): boolean {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) {
    return produced.split("/")[0] === entry.type.split("/")[0];
  }
  return entry.type === produced;
}

function preferredType(header: string | null): string | null {
  if (!header) return "text/html";
  const entries = parseAccept(header);
  if (entries.length === 0) return "text/html";

  let best: string | null = null;
  let bestQ = 0;
  let bestSpecificity = -1;

  for (const produced of PRODUCES) {
    for (const entry of entries) {
      if (!matches(entry, produced)) continue;
      if (entry.q === 0) continue;
      if (
        entry.q > bestQ ||
        (entry.q === bestQ && entry.specificity > bestSpecificity)
      ) {
        best = produced;
        bestQ = entry.q;
        bestSpecificity = entry.specificity;
      }
    }
  }
  return best;
}

function appendVaryAccept(headers: Headers): void {
  const existing = headers.get("Vary");
  if (!existing) {
    headers.set("Vary", "Accept");
    return;
  }
  const tokens = existing.split(",").map((s) => s.trim().toLowerCase());
  if (!tokens.includes("accept")) {
    headers.set("Vary", `${existing}, Accept`);
  }
}

const MARKDOWN_PATHS = new Set(["/index.md", "/404.md", "/llms.txt"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // These already are the markdown representation. Serve them as-is.
  if (MARKDOWN_PATHS.has(pathname) || pathname === "/robots.txt") {
    return NextResponse.next();
  }

  const acceptHeader = request.headers.get("accept");
  const chosen = preferredType(acceptHeader);

  if (chosen === "text/markdown") {
    const target = pathname === "/" ? "/index.md" : "/404.md";
    const rewritten = NextResponse.rewrite(new URL(target, request.url));
    appendVaryAccept(rewritten.headers);
    return rewritten;
  }

  if (chosen === null && acceptHeader) {
    return new Response(
      "Not Acceptable\n\nAvailable: text/html, text/markdown\n",
      {
        status: 406,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          Vary: "Accept",
        },
      },
    );
  }

  const response = NextResponse.next();
  appendVaryAccept(response.headers);
  return response;
}

export const config = {
  matcher: ["/((?!api/|_next/|_vercel/|favicon.ico|marco.jpeg).*)"],
};
