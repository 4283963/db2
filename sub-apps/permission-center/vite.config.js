import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    qiankun('permission-center', {
      useDevMode: true
    })
  ],
  server: {
    port: 5175,
    cors: true,
    origin: 'http://localhost:5175'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: '/permission-center/'
})
