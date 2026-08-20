import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/eduacharya_institute/" : "/",
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
  },
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        autoStaticPathsDiscovery: true,
          // Routes are discovered from the TanStack route tree. Disabling the
          // crawler prevents gallery image links from being treated as pages.
          crawlLinks: false,
        failOnError: true,
      },
    }),
    react(),
  ],
});
