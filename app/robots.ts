import type { MetadataRoute } from "next";

// Agents fetching on behalf of a person are welcome. Bulk training crawlers
// are not. This is the honor system, but it should at least be stated.
const TRAINING_CRAWLERS = [
  "GPTBot",
  "CCBot",
  "Google-Extended",
  "anthropic-ai",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...TRAINING_CRAWLERS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: "https://www.marcofleming.com/sitemap.xml",
    host: "https://www.marcofleming.com",
  };
}
