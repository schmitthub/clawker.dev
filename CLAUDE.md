# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally

## Architecture

Astro 5 static site using `.astro` single-file components (frontmatter script in `---` fences + HTML template + scoped `<style>`).

- `src/pages/` — File-based routing (each `.astro` file becomes a route)
- `src/layouts/` — Page shells (Layout.astro wraps pages via `<slot />`)
- `src/components/` — Reusable UI components
- `src/assets/` — Images/SVGs processed by Astro's asset pipeline (imported in frontmatter, use `.src` for URLs)
- `public/` — Static files served as-is at site root

TypeScript is configured with Astro's `strict` preset. Node version is pinned to v24.13.0 (`.nvmrc`).

## Deployment

Hosted on **Cloudflare Pages** (project: `clawker-dev`). Custom domains: `clawker.dev`, `www.clawker.dev`.

- Pushes to `main` auto-deploy via GitHub Actions (`.github/workflows/deploy.yml`)
- Uses `cloudflare/wrangler-action@v3` — builds with `npm ci && npm run build`, deploys `dist/`
- Manual deploy: `npx wrangler pages deploy dist/ --project-name=clawker-dev`

## Git Workflow

Branch protection on `main`:
- No direct commits — PRs required (1 approving review)
- Signed commits required
- Squash merge only (PR title + body)
- No force pushes, no branch deletion
- Enforced on admins
