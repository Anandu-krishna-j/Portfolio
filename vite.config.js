import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
      allow: [
        '.',
        'C:/Users/User/.gemini/antigravity/brain/134a6b8e-e78b-4dcf-9a0b-d31cf15e2fa7'
      ]
    }
  }
})
