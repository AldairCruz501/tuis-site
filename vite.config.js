import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

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
    },
  },
});
