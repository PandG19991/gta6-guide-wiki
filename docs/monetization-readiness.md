# Monetization readiness

Ad code is intentionally disabled until the publisher account, consent requirements, and production domain are ready.

## Reserved placements

- `after-answer`: after the useful answer, with a 250 px desktop and 120 px mobile reservation.
- `mid-article`: after the player-focused detail sections and before decision or source content.

`AdSlot.astro` renders nothing by default. Activation requires all of these values:

- `PUBLIC_ADS_ENABLED=true`
- `PUBLIC_ADSENSE_CLIENT`
- `PUBLIC_ADSENSE_SLOT_AFTER_ANSWER`
- `PUBLIC_ADSENSE_SLOT_MID_ARTICLE`

Do not enable the flag until the actual AdSense loader, consent behavior, publisher identity, and privacy disclosure have been reviewed together.

## Launch gate

- The custom domain and Search Console property are active.
- Policy, contact, privacy, and correction pages match production behavior.
- The selected pages are complete, useful, and contain no under-construction inventory.
- Publisher approval and applicable consent behavior are ready.
- Ads do not appear before the quick answer or interrupt tables and navigation.
- Layout reservations prevent ad loading from shifting article content.

Search impressions are a measurement baseline, not an eligibility requirement. Start with a bounded page set and remove any placement that harms answer access, layout stability, or task completion.

## Monitoring

Track indexed pages, search impressions, click-through rate, engaged visits, Core Web Vitals, ad viewability, and policy notifications. Improve existing useful pages before creating additional inventory.
