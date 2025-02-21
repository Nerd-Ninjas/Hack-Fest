import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    minify: "terser",
  },
  server: {
    proxy: {
      "/game": {
        target: "http://localhost:5000", 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/game/, ""),
      },
    },
  },
});
