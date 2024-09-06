import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/proyectos-react/packages/app-climatico/',
  plugins: [react()],
})
