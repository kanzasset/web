import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this repo under /web/. Vercel serves from the domain
// root and sets VERCEL=1 during its builds.
// Two pages: the public landing page (index.html) and the client panel
// prototype (app/index.html), reached from the Login button.
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/web/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'app/index.html'),
      },
    },
  },
});
