import type { APIRoute } from "astro";
import { site } from "@data/site";
import { guides } from "@data/guides";

const staticPages = [
  "/",
  "/release/",
  "/map/",
  "/guides/",
  "/database/",
  "/sources/",
  "/editorial-policy/",
  "/domain-strategy/",
  "/privacy/",
  "/contact/"
];

export const GET: APIRoute = () => {
  const urls = [
    ...staticPages,
    ...guides.map((guide) => `/guides/${guide.slug}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((path) => `  <url><loc>${new URL(path, site.url).toString()}</loc><lastmod>${site.currentDate}</lastmod></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};

