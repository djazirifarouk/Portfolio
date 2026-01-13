import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://djazirifarouk.github.io',
  base: '/Portfolio',
  integrations: [
    sitemap()
  ]
});