import type { MetadataRoute } from "next";

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
