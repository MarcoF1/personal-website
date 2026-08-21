import { siteMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(siteMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
