# Deployment Checklist

## Pre-Push

```bash
git status --short
git ls-files -o --exclude-standard
rg -n --hidden --glob '!node_modules/**' --glob '!.git/**' "(CLOUDFLARE_API_TOKEN|GITHUB_TOKEN|AIza|sk-|BEGIN (RSA|OPENSSH|PRIVATE) KEY|password|secret|api[_-]?key|client[_-]?secret)" .
npm run build
```

## Cloudflare Pages

First deploy:

```bash
npx wrangler pages deploy dist --project-name leonida-ledger --branch main
```

Long-term production should use Git integration:

- framework preset: Astro;
- build command: `npm run build`;
- build output: `dist`;
- production branch: `main`.

## SEO Minimum

- `robots.txt` points to canonical sitemap.
- `sitemap.xml` contains only indexable canonical URLs.
- every page has title, description, canonical, Open Graph, and Twitter metadata.
- article pages include JSON-LD for visible content.
- source and editorial policy pages are linked from the footer.

## Security Minimum

- Cloudflare Pages `_headers` ships with HSTS, CSP, nosniff, frame blocking, referrer policy, and permissions policy.
- No secrets, browser profiles, or local environment files in Git.
- No official or leaked game assets in `public/`.

