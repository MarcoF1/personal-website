export const dynamic = "force-static";

const body = `# Not found

There is nothing at this URL. This site is small, so the whole of it is:

- [/](https://www.marcofleming.com/) has everything: companies, research, and links.
- [/llms.txt](https://www.marcofleming.com/llms.txt) is the same thing, written for agents.
- [/sitemap.xml](https://www.marcofleming.com/sitemap.xml)
`;

export function GET() {
  return new Response(body, {
    status: 404,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
    },
  });
}
