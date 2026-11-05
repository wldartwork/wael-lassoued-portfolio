// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wael-lassoued.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  image: {
    // Images de démo encore hébergées sur le CDN Webflow.
    // À supprimer une fois toutes les images rapatriées dans src/content/work/.
    domains: ['cdn.prod.website-files.com'],
  },
});
