import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Increase chunk size warning limit to 1000 KB
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching and loading
        manualChunks: {
          // React ecosystem - rarely changes
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // UI libraries - changes occasionally  
          'ui-vendor': ['lucide-react'],
          
          // Payment processing - feature-specific
          'stripe-vendor': ['@stripe/stripe-js', '@stripe/react-stripe-js'],
          
          // Tailwind CSS - styling
          'styles-vendor': ['tailwindcss'],
        },
        
        // Optimize chunk naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId 
            ? chunkInfo.facadeModuleId.split('/').pop().replace(/\.[jt]sx?$/, '') 
            : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
        
        // Optimize asset naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `images/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },
    
    // Enable code splitting
    target: 'esnext',
    minify: 'terser',
    
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.log'], // Remove specific functions
      },
    },
    
    // Optimize CSS
    cssMinify: true,
    
    // Source maps for debugging (disable in production for smaller builds)
    sourcemap: false,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      '@stripe/stripe-js',
      '@stripe/react-stripe-js'
    ],
  },
});