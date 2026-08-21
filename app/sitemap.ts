import type { MetadataRoute } from "next";
import { notes } from "@/lib/notes";

const BASE = "https://www.marcofleming.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];

  // Only advertise /notes once it has something on it.
  if (notes.length > 0) {
    entries.push({
      url: `${BASE}/notes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return entries;
}
