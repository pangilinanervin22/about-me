// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/pangilinanervin22/porfolio.git",
  base: "portfolio",
  integrations: [mdx(), sitemap(), react()],
  output: "static",
});


