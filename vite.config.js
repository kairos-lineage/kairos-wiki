import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kairos-wiki/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
})
