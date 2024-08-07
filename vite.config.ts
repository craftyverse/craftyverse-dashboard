/// <reference types="vitest" />
/// <reference types="vite/client" />

import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// run package config
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: ["./src/test/setupTests.ts"],
  },
  preview: {
    port: 5173,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});
