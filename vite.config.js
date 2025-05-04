import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          fontawesome: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/react-fontawesome',
          ],
          ui: ['@headlessui/react', 'aos', 'swiper'],
        }
      }
    },
    chunkSizeWarningLimit: 700
  }
})
