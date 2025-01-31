// @ts-check
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Enable Vue to support Vue components.
  integrations: [vue(), mdx(), sitemap(), icon(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()],
  },
});
