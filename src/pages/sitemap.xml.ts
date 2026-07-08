import type { APIRoute } from "astro";
import { site } from "@data/site";
import { guides } from "@data/guides";

const staticPages = [
  "/",
  "/release/",
  "/map/",
  "/guides/",
  "/database/",
  "/updates/",
  "/sources/",
  "/editorial-policy/",
  "/domain-strategy/",
  "/privacy/",
  "/contact/"
];

export const GET: APIRoute = () => {
  const urls = [
    ...staticPages.map((path) => ({ path, lastmod: site.currentDate, changefreq: "weekly" })),
    ...guides.map((guide) => ({
      path: `/guides/${guide.slug}/`,
      lastmod: guide.updated,
      changefreq: guide.status === "launch-week" ? "weekly" : "monthly"
    }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${new URL(url.path, site.url).toString()}</loc><lastmod>${url.lastmod}</lastmod><changefreq>${url.changefreq}</changefreq></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};

