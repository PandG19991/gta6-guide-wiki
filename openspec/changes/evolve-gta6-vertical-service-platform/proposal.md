## Why

The current site is already a credible, image-led GTA 6 guide property, but its next growth step is still underspecified. It needs a small operating model that turns official changes, real search demand, player tasks, and later contributions into useful pages and tools without rebuilding a forum, CMS, or speculative content platform.

## What Changes

- Separate private editorial objects (`Fact`, `Signal`, `Candidate`, and raw `Contribution`) from public products (`Game Hub`, `Entity`, `Guide`, `Utility`, and qualifying `News`).
- Replace the permissive news scorecard with a mandatory decision tree based on source reliability, player impact, canonical-page fit, and independent user intent.
- Treat `PRE_LAUNCH`, `LAUNCH`, and `EVERGREEN` as one site operating phase rather than permanent per-article states.
- Add a minimal private candidate queue before further content expansion; keep it manually operated until volume proves automation is useful.
- Improve the current player path by prioritizing Quick Answer, removing redundant article navigation, connecting signals to affected guides, and connecting guides to explicit next actions.
- Allow official, first-party-tested, or corroborated evidence in public content; keep unconfirmed material private.
- Define conditional future gates for one utility, private player contributions, low-density ads, and legitimate store affiliate links.
- Explicitly defer public accounts, forums, comments, uploads, reputation, complex anti-scraping, automatic AI publishing, and a custom content-management platform.

## Capabilities

### New Capabilities

- `player-content-model`: Defines private editorial objects, public page products, publication states, evidence levels, and the site operating phase.
- `editorial-demand-queue`: Defines how official signals, search demand, site gaps, and player leads enter a private queue and become updates or new pages.
- `player-contribution-intake`: Defines the conditional, private, moderated contribution flow and its security and privacy boundaries.
- `intent-aligned-monetization`: Defines when and where display ads and verified store affiliate links may be tested without obstructing player tasks.

### Modified Capabilities

- None. The earlier repositioning change remains the baseline; this change governs the next platform stage.

## Impact

- Immediate implementation will touch the existing Astro content model, guide template, GTA 6 hub, updates data, redirects, and deterministic content checks.
- The first release does not require a database, public API, new frontend framework, analytics vendor, contribution endpoint, or ad script.
- Later contribution intake may use Cloudflare D1, Turnstile, rate limiting, and Access only after the feature is approved and demand exists.
- Monetization remains conditional on real publisher, consent, disclosure, and partner availability rather than arbitrary URL or traffic thresholds.
