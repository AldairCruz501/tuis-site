import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { config } from 'dotenv';

config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/imeis": {
        target: "https://addinteli-prod-api.com.mx/imeis", // URL de la API
        changeOrigin: true, // Cambiar el origen de la solicitud
        secure: false, // Si la API es HTTPS, usa true
        rewrite: (path) => path.replace(/^\/imeis/, ""), // Eliminar '/imeis' de la URL antes de enviarla
      },
      "/login": {
        target: "https://api.cero208.mx/Auth/login", // URL de tu servidor local
        changeOrigin: true,
        secure: false, // Si el servidor es HTTPS, establece en true
        rewrite: (path) => path.replace(/^\/login/, ""), // Ajusta según el nuevo endpoint
      },
      "/createAccount": {
        target: "https://api.cero208.mx/Auth/create", // URL de tu servidor local
        changeOrigin: true,
        secure: false, // Si el servidor es HTTPS, establece en true
        rewrite: (path) => path.replace(/^\/createAccount/, ""), // Ajusta según el nuevo endpoint
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
