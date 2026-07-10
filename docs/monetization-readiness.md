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
- Core guides are indexed and receiving real impressions.
- Ads do not appear before the quick answer or interrupt tables and navigation.
- Layout reservations prevent ad loading from shifting article content.

## Monitoring

Track indexed pages, search impressions, click-through rate, engaged visits, Core Web Vitals, ad viewability, and policy notifications. Improve existing useful pages before creating additional inventory.
