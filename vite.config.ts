import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path/posix';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: { overlay: false },
    proxy: {
      '/pages': 'http://localhost:4000',
    },
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'src/App'),
      app: path.resolve(__dirname, 'src/app'),
      pages: path.resolve(__dirname, 'src/pages'),
      features: path.resolve(__dirname, 'src/features'),
    },
  },
});
