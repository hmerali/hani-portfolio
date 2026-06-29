// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output: every page is pre-rendered to HTML with zero client JS by
// default. This is the single biggest lever for a perfect Lighthouse score and
// is auto-detected by Vercel with no extra adapter config.
export default defineConfig({
  // Production URL — used for canonical URLs, sitemap, and Open Graph tags.
  // Update this if a custom domain is added later.
  site: 'https://hani-portfolio-sigma.vercel.app',
  output: 'static',
  build: {
    // Inline all CSS into each page's <head> so there is no render-blocking
    // stylesheet request. The site's CSS is small; fonts still load async via
    // font-display: swap. This removes the last render-blocking resource.
    inlineStylesheets: 'always',
  },
  // No prefetch: it adds Astro's only client-side JS bundle, which shows up as
  // Total Blocking Time under heavy CPU throttling. For a small single-page
  // site the navigation benefit is marginal, so we ship zero bundled JS.
  integrations: [sitemap()],
});
