# Search Console and custom-domain launch record

The production origin is `https://gta6gameguide.xyz`. The custom-domain cutover, Domain property verification, and sitemap submission were completed on 2026-07-11. Keep this document as the launch record and monitoring checklist.

## Completed cutover

- Bound the apex and `www` host to the `leonida-ledger` Worker.
- Set `https://gta6gameguide.xyz` as the canonical origin.
- Redirect HTTP, `www`, `workers.dev`, and other non-canonical hosts with permanent redirects while preserving paths and queries.
- Disabled preview URLs and verified canonical, Open Graph, robots, sitemap, feed, security.txt, redirects, 404, and security headers.
- Deployed Worker version `b7ec2e22-ffae-4cbb-a571-0f8e2f799bf3` from commit `9e59ec0`.

## Completed Search Console handoff

- Verified the `gta6gameguide.xyz` Domain property under the owner's Google account.
- Submitted `https://gta6gameguide.xyz/sitemap.xml`.
- Search Console created the sitemap record but initially showed `Could not fetch` and zero discovered pages.
- An independent crawlability probe using a Googlebot User-Agent returned HTTP 200, `application/xml`, 5,180 bytes, and all 37 URLs. This does not prove that Google fetched the file; it supports waiting for Google's first processing pass rather than changing a valid response immediately.

## Monitoring

1. Recheck the sitemap after Google's first processing window.
2. Inspect the homepage, guide index, release guide, preorder guide, map guide, and one character guide when data becomes available.
3. Review Page indexing, Core Web Vitals, Manual actions, Security issues, and Performance.
4. Use real query impressions and click-through rates to prioritize updates; do not create thin pages to increase sitemap size.
5. Change the sitemap only if the fetch failure persists and independent requests reproduce a real crawl problem.

Official references:

- https://support.google.com/webmasters/answer/34592
- https://support.google.com/webmasters/answer/9008080
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

## Remaining owner handoffs

Registrar-side DNSSEC DS publication, AdSense publisher configuration, and consent management remain separate from Search Console. Do not store verification tokens or account credentials in the repository.
