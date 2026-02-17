# clawker.dev Cloudflare Pages Deployment

## End Goal
Deploy the clawker.dev splash site to Cloudflare Pages with automated CI/CD via GitHub Actions.

## Current Status
**COMPLETE.** Site is deployed to Cloudflare Pages with CI/CD via GitHub Actions.

## Background Context
- The site is fully built, committed (`d740bcd`), and pushed to `main` on `schmitthub/clawker.dev`
- Full build details in sibling memory: `.serena/memories/clawker-dev-splash-site-build.md`
- Astro 5 static site — build command: `npm run build`, output dir: `dist/`
- Site URL: `https://clawker.dev`
- Custom domains needed: `clawker.dev` and `www.clawker.dev`

## TODOs

- [x] **1. Export Cloudflare credentials** — provided via env vars
- [x] **2. Install wrangler CLI** — v4.65.0 via npx
- [x] **3. Create Cloudflare Pages project** — `clawker-dev`
- [x] **4. Deploy via wrangler** — `clawker-dev.pages.dev` live
- [x] **5. Configure custom domains** — `clawker.dev` and `www.clawker.dev` added (SSL provisioning)
- [x] **6. Add GitHub Action** — `.github/workflows/deploy.yml` (commit `78df5db`)
- [x] **7. Add GitHub secrets** — `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` set
- [x] **8. Test end-to-end** — GitHub Action ran successfully (run 22093264451, 33s)