import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  // add yur domain name here
  site: 'https://stratussoftworks.dev',
  compressHTML: true,
  integrations: [sitemap(), mdx(), tailwind()],
  content: {
    collections: {
      blog: './src/pages/blog',
    }
  }
});