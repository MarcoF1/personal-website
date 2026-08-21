import { NextRequest, NextResponse } from "next/server";

// Serve the markdown mirror only when a client explicitly asks for markdown
// and ranks it above HTML. A bare "*/*" means "anything", not "markdown".
const KNOWN_PATHS = new Set([
  "/",
  "/index.md",
  "/llms.txt",
  "/robots.txt",
  "/sitemap.xml",
  "/404.md",
]);

function quality(accept: string, type: string): number {
  const [group] = type.split("/");
  let best = -1;
  for (const part of accept.split(",")) {
    const [raw, ...params] = part.trim().split(";");
    const media = raw.trim().toLowerCase();
    if (media !== type && media !== `${group}/*` && media !== "*/*") continue;
    const q = params.reduce((acc, param) => {
      const [key, value] = param.split("=").map((x) => x.trim());
      return key === "q" ? Number.parseFloat(value) : acc;
    }, 1);
    if (q > best) best = q;
  }
  return best;
}

function prefersMarkdown(accept: string): boolean {
  if (!/(^|,)\s*text\/markdown\b/i.test(accept)) return false;
  return quality(accept, "text/markdown") > quality(accept, "text/html");
}

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  if (!prefersMarkdown(accept)) return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (KNOWN_PATHS.has(pathname) && pathname !== "/") return NextResponse.next();

  const target = pathname === "/" ? "/index.md" : "/404.md";
  const response = NextResponse.rewrite(new URL(target, request.url));
  response.headers.set("Vary", "Accept, Accept-Encoding");
  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|marco.jpeg).*)",
};
