// @ts-check
import { defineConfig } from 'astro/config';

// Static output: every page is pre-rendered to HTML with zero client JS by
// default. This is the single biggest lever for a perfect Lighthouse score and
// is auto-detected by Vercel with no extra adapter config.
export default defineConfig({
  // Update this to the final domain when one is purchased; used for canonical
  // URLs, sitemap, and Open Graph tags.
  site: 'https://hani-portfolio.vercel.app',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
