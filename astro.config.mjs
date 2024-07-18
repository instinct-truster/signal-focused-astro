import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [db(), react()],
  output: "hybrid",
  // remove lines below for astro dev toolbar to return.
  devToolbar: {
    enabled: false
  },
  adapter: node({
    mode: "standalone"
  })
});