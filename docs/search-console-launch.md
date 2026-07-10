# Search Console and custom-domain launch

The current `workers.dev` origin is a temporary production URL. Complete this checklist after choosing the permanent domain.

## Domain shortlist

1. `leonidaledger.com` - strongest brand fit and easiest to expand beyond one keyword.
2. `leonidaguides.com` - combines the Leonida brand with the high-intent `guides` term.
3. `gta6guidehub.com` - clearest exact-intent option, but more generic and more dependent on another company's trademark.

Availability and price must be checked at purchase time. Keep high-volume intents such as `gta 6 guide`, `gta 6 map`, `gta 6 release date`, and `gta 6 characters` in page titles and paths; do not force every keyword into the domain.

## Cutover

1. Add the selected custom domain to the `leonida-ledger` Worker in Cloudflare.
2. Change `site.url` in `src/data/site.ts` to the final HTTPS origin.
3. Rebuild and deploy, then verify canonical, Open Graph, robots, sitemap, feed, and security.txt URLs use the new origin.
4. Redirect the old `workers.dev` host to the custom domain with a Cloudflare host-level redirect, or add `X-Robots-Tag: noindex` to the old host after the custom domain is live.
5. Keep every path unchanged during the host migration.

## Search Console

1. Add a Domain property using only the root domain, without `https://` or a path.
2. Copy Google's DNS TXT verification value into Cloudflare DNS and complete verification.
3. Submit `https://<domain>/sitemap.xml` in the Sitemaps report. The sitemap is already linked from `robots.txt`.
4. Use URL Inspection on the homepage, guide index, release guide, preorder guide, map guide, and one character guide.
5. Request indexing only for the most important newly launched pages; let the sitemap and internal links handle the rest.
6. Review Page indexing, Core Web Vitals, Manual actions, Security issues, and Performance after Google begins collecting data.

If a URL-prefix property is needed as a temporary fallback, set `PUBLIC_GOOGLE_SITE_VERIFICATION` to Google's exact token before building. The preferred Domain property still uses DNS verification.

Official references:

- https://support.google.com/webmasters/answer/34592
- https://support.google.com/webmasters/answer/9008080
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

## Owner handoff

The owner must choose and purchase the domain and use the Google account that will own the Search Console property. Do not add a fake verification token or submit a temporary property on someone else's account.
