# clawker.dev Splash Site Build

## Session ID
`9b0e9120-caec-4b84-bded-a06546ec7039`

## End Goal
Build and deploy the clawker.dev marketing splash site — a static Astro 5 site hosted on Cloudflare Pages.

## Current Status
Site is built, committed, and pushed to `main` on `schmitthub/clawker.dev`. **Deployment to Cloudflare Pages is next.**

## What's Done

- [x] Astro 5 project setup with `@astrojs/sitemap` integration
- [x] `astro.config.mjs` — site URL `https://clawker.dev`, sitemap
- [x] `src/layouts/Layout.astro` — full design system (amber/cyan palette, Clash Display + Satoshi fonts, CSS reset, SEO meta, OG/Twitter cards, Fontshare CDN)
- [x] `src/components/Hero.astro` — big "clawker" logo, gradient h1 ("Put your agents in containers where they belong"), subtitle referencing devcontainers+k8s+Claude Code, CTAs
- [x] `src/components/TerminalDemo.astro` — terminal chrome, Homebrew/Script tabs, copy buttons, CSS typing animation showing `clawker run -it --agent fix --worktree bugfix:main @` with firewall/credential forwarding output
- [x] `src/components/Features.astro` — 6-card grid: Agent-in-Container, Firewalled, Credential Forwarding, Git Worktrees, Jailed Docker, Bind or Snapshot
- [x] `src/components/InstallBlock.astro` — install section with Homebrew + curl commands, copy buttons
- [x] `src/components/Footer.astro` — Docs/GitHub/Install links
- [x] `src/data/features.ts` — typed feature data with SVG icon paths
- [x] `public/robots.txt`, `public/favicon.svg`
- [x] Deleted Astro starter files
- [x] Production build verified clean
- [x] Committed as `d740bcd` and pushed to `main`

## What's Left (TODOs)

- [ ] **Deploy to Cloudflare Pages** — connect repo, set build command (`npm run build`), output dir (`dist/`), configure `clawker.dev` and `www.clawker.dev` custom domains
- [ ] **Cloudflare Worker for `/install.sh`** — deferred to separate task per original plan, but discuss with user if they want to tackle it now
- [ ] **OG image** — currently omitted, placeholder or generation later

## Design Decisions
- **Theme:** Dark bg (#09090b) + amber (#f59e0b) accents + cyan (#06b6d4) terminal prompts
- **Fonts:** Clash Display (headings) + Satoshi (body) via Fontshare CDN, system mono stack for code
- **Tone:** Dev-to-dev, not corporate. References README's own voice ("devcontainers + k8s had a Claude Code baby")
- **Features reflect actual README:** firewall, credential forwarding, jailed Docker (pkg/whail), worktrees, bind/snapshot modes
- **Terminal demo uses real CLI syntax:** `clawker run -it --agent fix --worktree bugfix:main @`

## Lessons Learned
- npm 11 deprecated `supportedArchitectures` in `.npmrc` — no clean way to install native binaries for both darwin and linux into a shared bind-mounted `node_modules`. Each side must run `npm install` before building. The lockfile keeps versions aligned.
- Git push requires `gh auth setup-git` first in this container (no SSH client installed). Remote was switched to HTTPS.
- Rollup has no WASM fallback — hard-requires platform-native binary.

## Key Files
| File | Role |
|---|---|
| `src/layouts/Layout.astro` | Design system, fonts, SEO meta |
| `src/components/Hero.astro` | Hero section |
| `src/components/TerminalDemo.astro` | Most complex — tabs, copy, animation |
| `src/components/Features.astro` | Feature grid |
| `src/data/features.ts` | Feature content data |
| `src/pages/index.astro` | Page composition |
| `astro.config.mjs` | Site config |

## References
- PRD: `.serena/memories/prd_clawker-dev-splash-site.md`
- GitHub repo: https://github.com/schmitthub/clawker.dev
- CLI repo/README: https://github.com/schmitthub/clawker

---

**IMPORTANT:** Always check with the user before proceeding with the next TODO item. If all work is done, ask the user if they want to delete this memory.
