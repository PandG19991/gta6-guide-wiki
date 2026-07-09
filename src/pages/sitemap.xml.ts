import type { APIRoute } from "astro";
import { site } from "@data/site";
import { guideCategoryMeta, guides } from "@data/guides";

const staticPages = [
  "/",
  "/gta-6/",
  "/gta-6/features/",
  "/gta-6/database/",
  "/gta-6/database/vehicles/",
  "/gta-6/database/characters/",
  "/release/",
  "/map/",
  "/guides/",
  "/updates/",
  "/sources/",
  "/editorial-policy/",
  "/testing-protocol/",
  "/domain-strategy/",
  "/privacy/",
  "/contact/"
];

export const GET: APIRoute = () => {
  const urls = [
    ...staticPages.map((path) => ({ path, lastmod: site.currentDate, changefreq: "weekly" })),
    ...guideCategoryMeta.map((meta) => ({
      path: `/guides/category/${meta.slug}/`,
      lastmod: site.currentDate,
      changefreq: "weekly"
    })),
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

