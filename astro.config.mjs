import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  adapter: node({ mode: "standalone" }),
  i18n: {
    defaultLocale: "en",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
      strategy: "pathname",
    },
  },
  output: "hybrid",
  server: { port: 3000 },
});
