# Hani Merali — Portfolio

A personal portfolio for Hani Merali: software engineer and computer science
student at UT Austin, working across civic data analytics and accessibility
engineering.

Editorial/warm design, purple + black palette, built for accessibility (WCAG
2.1 AA) and speed (Lighthouse 100 across Performance, Accessibility, Best
Practices, and SEO).

## Tech stack

- **[Astro](https://astro.build)** — static output, zero client JS by default.
- **Self-hosted variable fonts** — Fraunces (headings) + Inter (body).
- **Sharp** — build-time image optimization to responsive WebP.
- No UI framework, no runtime CSS-in-JS — just HTML, CSS, and a few hundred
  bytes of progressive-enhancement JavaScript.

## Project structure

```
src/
  components/   Header, Footer, ProjectCard
  data/         site.ts, experience.ts, projects.ts  (all real content)
  layouts/      BaseLayout.astro  (SEO/OG, skip link, scroll-reveal)
  pages/        index, about, contact, 404, projects/[slug]
  styles/       global.css  (design tokens + base)
public/         resume.pdf, favicon.svg, og-image.png, robots.txt
```

All résumé/project content lives in `src/data/`. Edit those files to update
content — no markup changes needed.

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start dev server at `localhost:4321`     |
| `npm run build`   | Build the static site to `dist/`         |
| `npm run preview` | Preview the production build locally     |

## Deploying to Vercel

This repository is connected to a Vercel project, so **every push to `main`
deploys automatically** — no manual step needed.

This is a static Astro site and is auto-detected by Vercel.

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, **New Project** → import the repo.
3. If the repo root is not this folder, set **Root Directory** to
   `hani-portfolio`.
4. Framework preset: **Astro** (auto-detected). Build command `npm run build`,
   output directory `dist`. No environment variables required.
5. Deploy. The free `*.vercel.app` URL works out of the box.

When a custom domain is ready, add it in Vercel and update `site` in
`astro.config.mjs` (and the `Sitemap:` line in `public/robots.txt`) so
canonical URLs, the sitemap, and Open Graph tags use it.

## Accessibility & performance notes

- WCAG 2.1 AA: all color pairs verified ≥ 4.5:1 (most ≥ 7:1), full keyboard
  navigation, visible focus, semantic landmarks, skip link, alt text.
- `prefers-reduced-motion` disables all motion.
- All CSS is inlined; fonts use `font-display: swap`; images carry explicit
  dimensions (zero layout shift).
