import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path/posix';
import { getDirsAsync } from './vite-utils/index';

const baseDir = 'src';

export default defineConfig(async ({ command, mode }) => {
  const dirs = await getDirsAsync(baseDir);
  return {
    plugins: [react()],
    server: {
      hmr: { overlay: false },
      proxy: {
        '/api': 'http://localhost:4000',
      },
    },
    resolve: {
      alias: {
        App: path.resolve(__dirname, path.join(baseDir, 'App')),
        'App.css': path.resolve(__dirname, path.join(baseDir, 'App.css')),
        ...dirs,
      },
    },
  };
});
