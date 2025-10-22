import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: "http://localhost:3000",
    port: 3000,
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "shell",
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
        // Test to check whether it preload or not, because there no eager option in @module-federation/vite
        // After inspecting the generated html, it is not preloaded, only somewhere import, it loaded.
        // window.__FEDERATION__.__SHARE__.shell.default
        // --> only react and react/ are shared, because it load in first import
        "lodash-es": {
          singleton: true,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
