import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sai-homepage/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
})
