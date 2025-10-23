import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import path from "path";
import dep from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: "http://localhost:3001",
    port: 3001,
  },
  preview: {
    port: 5001,
  },
  plugins: [
    react(),
    federation({
      // Make it as same as remote name in shell
      name: "notion-remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./app": "./src/app-in-shell.tsx",
      },
      shared: {
        react: {
          requiredVersion: dep.dependencies.react,
          singleton: true,
          strictVersion: true,
        },
        "react/": {
          singleton: true,
          requiredVersion: dep.dependencies.react,
          strictVersion: true,
        },
        "react-dom": {
          requiredVersion: dep.dependencies["react-dom"],
          singleton: true,
          strictVersion: true,
        },
        "react-router": {
          singleton: true,
          requiredVersion: dep.dependencies["react-router"],
          strictVersion: true,
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
