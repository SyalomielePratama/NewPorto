import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
       host: '0.0.0.0', // Mengizinkan akses dari semua alamat IP
       port: 5151,
   },
  plugins: [react()],
})
