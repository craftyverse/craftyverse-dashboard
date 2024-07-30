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
});
