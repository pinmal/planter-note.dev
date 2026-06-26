import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://planter-note.pages.dev',
  output: 'static',
  trailingSlash: 'always',
  integrations: [],
  build: {
    format: 'directory',
  },
});
