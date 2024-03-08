/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("component-a-window"),
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "diabolocom",
      fileName: "diabolocom",
    },
  },
  define: {
    "process.env": process.env,
  },
  test: {
    environment: "jsdom",
  },
});
