import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'node:path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')// định nghĩa alias cho thư mục src
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    Pages({
      dirs: [
        './src/pages'// chhỉ định thư mục pages 
      ]
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ]
    }),
  ],
})
