/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    exclude: ["node_modules"],
    coverage: {
      reporter: ["text", "html"],
      exclude: [
        "src/**/*.d.ts",
        "src/**/*.test.ts",
        "src/**/*.spec.ts",
        "src/mocks/*.*",
        "src/test/*.*",
        "src/main.ts",
        "src/services/types.ts",
      ],
      include: ["src/**/*.{vue,ts}"],
      all: true,
    },
  },
});
