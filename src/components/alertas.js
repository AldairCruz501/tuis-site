import axios from "axios";
import Swal from "sweetalert2";


export const verifyImei = async (imei, setLoading) => {
    // Validación del IMEI
    if (!/^\d*$/.test(imei)) {
      Swal.fire({
        icon: "error",
        title: "Validación fallida",
        text: `El IMEI debe contener únicamente caracteres numéricos. \nIMEI ingresado: ${imei}`,
      });
      return;
    }
  
    if (imei.length !== 15) {
      Swal.fire({
        icon: "error",
        title: "Validación fallida",
        text: `El IMEI debe tener exactamente 15 dígitos. Actualmente tiene ${imei.length}. \nIMEI ingresado: ${imei}`,
      });
      return;
    }
  
    // Mostrar estado de carga
    setLoading(true);
  
    const DISTRIBUTOR_ID = import.meta.env.VITE_DISTRIBUTOR_ID;
    const WALLET_ID = import.meta.env.VITE_WALLET_ID;
    
  
    try {
      const url = "/imeis";
      const params = {
        imei,
        distributor_id: DISTRIBUTOR_ID,
        wallet_id: WALLET_ID,
      };
  
      console.log("Enviando solicitud con los siguientes parámetros:", params);
  
      const response = await axios.post(url, params);
  
      console.log("Respuesta de la API:", response.data);
  
      setLoading(false);
  
      // Mostrar alertas dependiendo de la respuesta
      const data = response.data;
      if (data.result?.homologated) {
        Swal.fire({
          icon:
            data.result.homologated === "COMPATIBLE PROBADO"
              ? "success"
              : "warning",
          title:
            data.result.homologated === "COMPATIBLE PROBADO"
              ? "¡Compatible!"
              : "No compatible",
          text: `IMEI ingresado: ${imei}\n`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `IMEI ingresado: ${imei}\n${
            data.message || "El IMEI no es compatible."
          }`,
        });
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
  
      setLoading(false);
  
      // Mostrar mensaje de error
      Swal.fire({
        icon: "error",
        title: "Error de conexión",
        text: `Ocurrió un problema al comunicarse con el servidor. \nIMEI ingresado: ${imei}\nDetalle: ${error.message}`,
      });
    }
  };
  