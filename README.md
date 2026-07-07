# Leonida Ledger

English SEO-first guide and database site for GTA 6 search demand.

This is an unofficial fan guide project. It is not affiliated with Rockstar Games or Take-Two Interactive.

## Positioning

Leonida Ledger is not a generic wiki clone. It is a source-tracked guide hub:

- fast official answers for release, preload, platforms, preorder, and edition searches;
- evidence-labeled trackers for map, characters, vehicles, cheats, and missions;
- launch-week templates that convert into tested walkthroughs after release;
- static, fast, mobile-friendly pages suitable for Google indexing and later ad review.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run deploy
```

## Content Rules

- Put every material factual claim behind a source or a confidence label.
- Do not publish leaked pre-release footage, leaked maps, copied screenshots, official logos, or copied guide text.
- Do not invent cheat codes, mission lists, locations, prices, or PC timing.
- Keep official facts, trailer-observed facts, analysis, and rumors separate.
- Add AdSense only after the site has enough original publisher content and policy pages are current.

## Deployment

The first deploy can use Wrangler direct upload:

```bash
npm run build
npx wrangler pages deploy dist --project-name leonida-ledger --branch main
```

For long-term production, connect the GitHub repo to Cloudflare Pages with:

- build command: `npm run build`
- output directory: `dist`
- production branch: `main`


