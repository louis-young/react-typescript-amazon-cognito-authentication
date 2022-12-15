/// <reference types="vitest" />

import path from "path";
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        // prettier-ignore
        lintCommand: "eslint \"./**/*.{js,jsx,ts,tsx}\"",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "./runtimeConfig": "./runtimeConfig.browser", // Fix Amplify issue.
    },
  },
  server: {
    host: true,
    open: true,
    port: 3000,
  },
  preview: {
    host: true,
    open: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
  ...(process.env.NODE_ENV !== "test"
    ? {
        define: {
          global: {}, // Fix Amplify issue without breaking Vitest.
        },
      }
    : {}),
});
