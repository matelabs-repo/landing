import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "hybrid",
  site: 'https://matelabs.io',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  trailingSlash: 'always',

  vite: {
    css: {
      devSourcemap: true,
    },
  },

  adapter: cloudflare({ mode: 'directory' })
});