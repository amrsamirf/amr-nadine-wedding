import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

export default defineConfig({
  base: "/amr-nadine-wedding/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ar: resolve(__dirname, "ar/index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
