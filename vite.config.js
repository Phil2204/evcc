import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  plugins: [createVuePlugin()],
  root: "./assets",
  publicDir: "public",
  base: "./",
  build: {
    outDir: "../dist/",
    emptyOutDir: true,
    assetsInlineLimit: 1024,
  },
});