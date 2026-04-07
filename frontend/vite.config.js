import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Serve index.html for all 404s — allows React Router to handle /admin-login on refresh
    historyApiFallback: true,
  },
})

