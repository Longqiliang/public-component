// import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue2';
import vueJsx from '@vitejs/plugin-vue2-jsx';
import { defineConfig } from 'vite';

import path from 'path';

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  plugins: [
    Vue(),
    vueJsx()
  ],

  resolve: {
    alias: {
      '@': resolve('../src')
    }
  },


  server: {
    proxy: {
      '/waas': {
        target: 'https://preview.56xd.com',
        changeOrigin: true,
        ws: true,
        secure: false
      },
    }
  }
})
