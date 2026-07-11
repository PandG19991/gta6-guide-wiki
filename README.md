# Leonida Ledger

Player-first GTA 6 guide, news, and database site built with Astro and Cloudflare Workers Static Assets.

This is an unofficial fan guide project. It is not affiliated with Rockstar Games or Take-Two Interactive.

## Positioning

Leonida Ledger is not a generic wiki clone or a project-status blog. It is a visual guide hub:

- fast answers for release, preload, platforms, preorder, and edition decisions;
- substantial guides for the Leonida map, characters, vehicles, and official trailers;
- image-led databases built from a governed official-media registry;
- static, responsive pages with canonical URLs, sitemap, RSS, Article schema, and Breadcrumb schema.

## Commands

```bash
npm install
npm run dev
npm run build
npm run check:media
npm run check:metadata
npm run check:indexability
npm run check:links
npm run check:content
npm run preview
npm run deploy
```

## Project Knowledge

- [GTA 6 guide site project retrospective](docs/retrospectives/gta6-guide-site-project-retrospective.md)
- [Reusable game guide site workflow template](docs/playbooks/game-guide-site-playbook.md)

## Content Rules

- Answer the player question before background context, sources, or monetization.
- Use Rockstar, Take-Two, and platform stores for material launch and product facts.
- Use only media approved in `src/data/media.ts`, with useful alt text and source attribution.
- Do not publish leaked pre-release footage, leaked maps, copied guides, or fake downloads.
- Do not invent cheat codes, mission lists, locations, prices, or PC timing.
- Keep launch testing in `docs/launch-week-workflow.md` until it produces a useful verified guide.
- Keep AdSense disabled until the production domain, publisher account, consent behavior, and privacy disclosure are ready.

## Deployment

Cloudflare Pages project creation returned a Cloudflare API 500 during the first rollout, so this repo uses Cloudflare Workers Static Assets. It still serves the static Astro output from Cloudflare's edge network and supports `_headers`.

```bash
npm run build
npx wrangler deploy
```

If Pages Git integration is preferred later, create a fresh Pages project in the Cloudflare Dashboard and use:

- build command: `npm run build`
- output directory: `dist`
- production branch: `main`


