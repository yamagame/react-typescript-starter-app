import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path/posix';
import fs from 'fs/promises';

export default defineConfig(async ({ command, mode }) => {
  const dirs = (await fs.readdir('./src', { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .reduce((sum, dir) => {
      sum[dir.name] = path.resolve(__dirname, path.join('src', dir.name));
      return sum;
    }, {});
  return {
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
        ...dirs,
      },
    },
  };
});
