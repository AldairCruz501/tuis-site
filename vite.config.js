import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { config } from "dotenv";

config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/imeis": {
        target: "https://tuis.cero208.mx/imeis",
        //target: "http://localhost:3360/imeis", // URL de la API
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/imeis/, ""),
      },
      "/login": {
        target: "https://tuis.cero208.mx/Auth/login",
        //target: "http://localhost:3360/Auth/login",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/login/, ""),
      },
      "/createAccount": {
        target: "https://tuis.cero208.mx/Auth/create",
        //target: "http://localhost:3360/Auth/create",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/createAccount/, ""),
      },
      "/create-checkout-session": {
        target: "https://tuis.cero208.mx/payment/create-checkout-session",
        // target: "http://localhost:3360/payment/create-checkout-session",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/create-checkout-session/, ""),
      },
    },
  },
  build: {
    outDir: "dist",
  },
});
