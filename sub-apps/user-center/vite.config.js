import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    qiankun('user-center', {
      useDevMode: true
    })
  ],
  server: {
    port: 5174,
    cors: true,
    origin: 'http://localhost:5174'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: '/user-center/'
})
