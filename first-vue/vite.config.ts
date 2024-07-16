import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    createSvgIconsPlugin({ //+ 新增
      iconDirs: [fileURLToPath(new URL('./src/assets/svgIcons', import.meta.url))], //+ 新增
      symbolId: 'icon-[name]', //+ 新增
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
