// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  build: {
    // CHANGE THIS LINE
    outDir: 'dist', // Use the default 'dist' directory
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    // You can re-enable minification for production
    minify: true, 
    sourcemap: false, // Turn off sourcemaps for production
  },
  server: {
    port: 3000,
    open: true,
  },
  // You can remove this in production build to clean up logs
  // esbuild: {
  //   drop: ['console', 'debugger'],
  // },
});