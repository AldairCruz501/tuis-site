import axios from "axios";
import Swal from "sweetalert2";
import { saveToken } from "../storage/SaveUser";

export const AuthLogin = async (email, password) => {
  try {
    const url = "/login";

    const response = await axios.post(url, { email, password });

    const responseBody = response.data.message;

    saveToken(responseBody);

    Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      text: `¡Login hecho satisfactoriamente!`,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";  // Asegúrate de que esta sea la URL correcta de tu página de inicio
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
