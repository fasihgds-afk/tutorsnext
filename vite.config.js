import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    // Only controls the warning, not actual optimization
    chunkSizeWarningLimit: 1000,

    // Modern browsers
    target: "esnext",

    // Fast production minification
    minify: "oxc",

    // Smaller production build
    sourcemap: false,

    // CSS optimization
    cssMinify: true,

    rollupOptions: {
      output: {
        // Vite 8 / Rolldown compatible manual chunking
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/react-router-dom/")
          ) {
            return "react-vendor";
          }

          if (id.includes("/lucide-react/")) {
            return "ui-vendor";
          }

          if (
            id.includes("/@stripe/stripe-js/") ||
            id.includes("/@stripe/react-stripe-js/")
          ) {
            return "stripe-vendor";
          }

          return "vendor";
        },

        chunkFileNames: "js/[name]-[hash].js",

        assetFileNames(assetInfo) {
          const name = assetInfo.name || "";
          const ext = name.split(".").pop()?.toLowerCase();

          if (ext === "css") {
            return "css/[name]-[hash][extname]";
          }

          if (
            ["png", "jpg", "jpeg", "svg", "gif", "webp", "avif", "ico"].includes(ext)
          ) {
            return "images/[name]-[hash][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },

    // Remove debugging code from production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "lucide-react",
    ],
  },
});