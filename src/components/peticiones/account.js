//import axios from "axios";
import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });


export const Account = async (firstName, lastName, address, between_Streets, CP,description, phone, email, password, repetPassword) => {
  if (repetPassword != password) {
    Toast.fire({
        icon: "error",
        text: `Las contraseñas no coinciden`,
      })
  } else {
    
    try {
        const url = "/createAccount";
        const data = {firstName,lastName,address,between_Streets,CP,description,phone,email,password}
        // Realiza la solicitud POST
         await axios.post(url, data, {
            headers: {
              "Content-Type": "application/json"
            }
          });
    
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          text: `Cuenta creada satisfactoriamente.\n`,
          confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
              // Redirige a la página de inicio (Home)
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
  }
   
};