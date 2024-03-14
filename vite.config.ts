import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
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
        ]}),
  ],
})
