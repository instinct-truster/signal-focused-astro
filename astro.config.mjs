import { defineConfig } from "astro/config";
import db from "@astrojs/db";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [db(), react()],
  // remove lines below for astro dev toolbar to return.
  devToolbar: {
    enabled: false,
  },
});
