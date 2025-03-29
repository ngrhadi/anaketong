import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
// import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://anaketong.web.id',

  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/work': '/work/1'
  },
  experimental: {
    responsiveImages: true,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        page !== 'https://anaketong.web.id/work/1' &&
        page !== 'https://anaketong.web.id/work/2' &&
        page !== 'https://anaketong.web.id/work/3' &&
        page !== 'https://anaketong.web.id/about'
    })
  ],
});
