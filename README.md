# clawker.dev

Splash site for [clawker](https://github.com/schmitthub/clawker) — built with Astro 5, hosted on Cloudflare Pages.

**Live:** [https://clawker.dev](https://clawker.dev)

## Development

```sh
npm install
npm run dev        # localhost:4321
npm run build      # production build → dist/
npm run preview    # preview production build
```

Node version is pinned in `.nvmrc` (v24.13.0).

## Deployment

Pushes to `main` auto-deploy to Cloudflare Pages via GitHub Actions.

Manual deploy:

```sh
npx wrangler pages deploy dist/ --project-name=clawker-dev
```

## Contributing

- Branch off `main`, open a PR
- Signed commits required
- Squash merge only
