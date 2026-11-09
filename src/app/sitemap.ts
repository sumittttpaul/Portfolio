import type { MetadataRoute } from "next";
import { projects } from "content/projects";
import { getArticles } from "lib/blog";
import { site } from "content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/work`, lastModified: now, priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: now, priority: 0.8 },
    { url: `${site.url}/contact`, lastModified: now, priority: 0.6 },
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}`, lastModified: now, priority: 0.7 })),
    ...getArticles().map((a) => ({ url: `${site.url}/blog/${a.slug}`, lastModified: new Date(a.date), priority: 0.7 })),
  ];
}
