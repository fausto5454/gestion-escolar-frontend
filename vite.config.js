import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // El objeto 'server' debe contener la configuración del proxy
  server: {
    proxy: {
      // Redirige todas las peticiones que empiecen con '/api'
      '/api': {
        // Hacia tu servidor de backend local
        target: 'http://localhost:8000',
        // Esto es necesario para que funcione con servidores de terceros
        changeOrigin: true,
      }
    }
  }
});
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
>>>>>>> 0ffb3716a33ab13948139a1981f5ab894079ea17
