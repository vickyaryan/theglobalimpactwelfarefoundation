import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ye aapka build folder hai
    emptyOutDir: true, // Har baar purani files delete karke fresh build banayega
  }
})
