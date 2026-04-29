import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localImages = path.join(__dirname, 'images')

export default defineConfig({
  plugins: [
    react(),
    {
      // Serve root images/ as /kairos-wiki/images/ in dev
      name: 'local-images-dev',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const prefix = '/kairos-wiki/images/'
          if (req.url?.startsWith(prefix)) {
            const file = path.join(localImages, req.url.slice(prefix.length).split('?')[0])
            if (fs.existsSync(file)) {
              const ext = path.extname(file).toLowerCase()
              const mime = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif' }
              res.setHeader('Content-Type', mime[ext] ?? 'application/octet-stream')
              fs.createReadStream(file).pipe(res)
              return
            }
          }
          next()
        })
      },
      // Copy root images/ into dist/images/ on build (recursive — includes subdirs)
      closeBundle() {
        if (!fs.existsSync(localImages)) return
        const dest = path.join(__dirname, 'dist', 'images')
        fs.cpSync(localImages, dest, { recursive: true })
        console.log(`[local-images] copied images/ → dist/images/`)
      },
    },
  ],
  base: '/kairos-wiki/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
})
