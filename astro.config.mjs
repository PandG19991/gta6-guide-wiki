import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://leonida-ledger.pandg1991.workers.dev",
  output: "static",
  build: {
    format: "directory"
  }
});

