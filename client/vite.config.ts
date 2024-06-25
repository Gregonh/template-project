/* eslint-disable import/no-default-export */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use this path in your Express server
    outDir: '../dist/client',
  },
});
