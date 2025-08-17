import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "figma:asset": path.resolve(__dirname, "./src/assets")
    },
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Make the build more portable
    rollupOptions: {
      output: {
        // Ensure consistent file names for easier deployment
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Generate source maps for easier debugging
    sourcemap: true,
    // Optimize for client-side only deployment
    target: 'esnext',
    minify: 'esbuild'
  },
  // Configure for static deployment
  base: './',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
})