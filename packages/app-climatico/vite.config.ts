import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/proyectos-react/app-climatico/',  // Asegúrate de que esta ruta coincida con la de GitHub Pages
  plugins: [react()]
});
