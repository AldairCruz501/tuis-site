import axios from "axios";
import Swal from "sweetalert2";
import { saveToken, removeToken } from "../storage/SaveUser";
const token = import.meta.env.VITE_TOKE;

export const AuthLogin = async (email, password) => {
  try {
    const url = "/login";
    const data = {
      email,
      password,
    };
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Enviar el Bearer token en los encabezados
      },
    });

    const responseBody = response.data.message;

    saveToken(responseBody);

    Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      text: `¡Login hecho satisfactoriamente!`,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/"; // Asegúrate de que esta sea la URL correcta de tu página de inicio
      }
    });
  } catch (error) {
    // Muestra el error en caso de fallo
    Swal.fire({
      icon: "error",
      title: "Error de conexión",
      text: `Ocurrió un problema al comunicarse con el servidor. Detalle: ${error.message}`,
    });
  }
};

export const AuthLogout = () => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Quieres cerrar sesión?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#6149B7",
    cancelButtonColor: "#FF8500 ",
    confirmButtonText: "Sí, cerrar sesión",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      removeToken(); // Elimina el token almacenado
      Swal.fire({
        icon: "success",
        title: "Sesión cerrada",
        text: "Has cerrado sesión correctamente.",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.href = "/";
      });
    }
  });
};
