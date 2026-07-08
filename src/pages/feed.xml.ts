import type { APIRoute } from "astro";
import { guides } from "@data/guides";
import { site } from "@data/site";

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, (char) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;"
    };
    return entities[char];
  });

const pubDate = (date: string) => new Date(`${date}T12:00:00.000Z`).toUTCString();

export const GET: APIRoute = () => {
  const items = guides
    .map((guide) => {
      const url = new URL(`/guides/${guide.slug}/`, site.url).toString();
      const description = `${guide.deck} ${guide.bullets[0]}`;

      return [
        "    <item>",
        `      <title>${escapeXml(guide.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <description>${escapeXml(description)}</description>`,
        `      <category>${escapeXml(guide.category)}</category>`,
        `      <pubDate>${pubDate(guide.updated)}</pubDate>`,
        "    </item>"
      ].join("\n");
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${escapeXml(site.url)}</link>
    <description>${escapeXml(site.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${pubDate(site.currentDate)}</lastBuildDate>
    <docs>https://www.rssboard.org/rss-specification</docs>
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
};
