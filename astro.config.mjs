import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
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
});
