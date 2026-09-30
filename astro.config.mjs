import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://planter-note.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // privacy-policy は noindex 運用のため sitemap からも除外する
      filter: (page) => !page.includes('/privacy-policy'),
    }),
  ],
  build: {
    format: 'directory',
  },
});
