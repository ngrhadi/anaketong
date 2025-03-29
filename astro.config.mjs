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
      '/project': '/project/1'
  },
  experimental: {
    responsiveImages: true,
  },
  integrations: [
    sitemap({
      filter: (page) =>
            page !== 'https://anaketong.web.id/project/1' &&
            page !== 'https://anaketong.web.id/project/2' &&
            page !== 'https://anaketong.web.id/project/3' &&
            page !== 'https://anaketong.web.id/about'
    })
  ],
});
