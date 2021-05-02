import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteEslint from '@ehutch79/vite-eslint';

import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [vue(), viteEslint()]
});
