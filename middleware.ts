import { NextRequest, NextResponse } from "next/server";

// When an agent asks for text/markdown, serve the markdown mirror of the
// homepage at the same URL. The matching Vary: Accept on the HTML variant is
// set in vercel.json, because Next.js overwrites Vary on app-router HTML
// responses and the edge is the only layer that can add it.
export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  const wantsMarkdown =
    accept.includes("text/markdown") && !accept.includes("text/html");

  if (!wantsMarkdown) return NextResponse.next();

  const response = NextResponse.rewrite(new URL("/index.md", request.url));
  response.headers.set("Vary", "Accept, Accept-Encoding");
  return response;
}

export const config = {
  matcher: "/",
};
