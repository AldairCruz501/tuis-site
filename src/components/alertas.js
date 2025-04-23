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
  try {
    const url = "https://tuis.cero208.mx/imeis";
    const params = {
      imei,
    };

    const response = await axios.post(url, params, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Respuesta de la API:", response.data);

    setLoading(false);

    // Procesar respuesta
    const data = response.data;
    const homologated = data.result?.homologated || "";
    const volteSupport = data.result?.volte_support === "SI" ? "Sí" : "No";
    const band28Support = data.result?.band28_support === "SI" ? "Sí" : "No";
    const esimSupport = data.result?.esim === "SI" ? "Compatible" : "No Compatible";
    ;

    if (homologated === "COMPATIBLE PROBADO" || homologated === "COMPATIBLE HOMOLOGADO") {
      Swal.fire({
        icon: "success",
        title: "¡Compatible!",
        html: `<b>IMEI:</b> ${imei} <br> <b>Banda 28:</b> ${band28Support} <br> <b>VoLTE:</b> ${volteSupport} <br> <b>ESIM:</b> ${esimSupport}` , // Utiliza la plantilla de HTML con etiquetas <b> para resaltar el textoVoLTE: ${volteSupport}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "No compatible",
        html: `<b>IMEI:</b> ${imei} <br> <b> Banda 28: </b> ${band28Support} <br> <b>VoLTE:</b> ${volteSupport} <br> <b>ESIM:</b> ${esimSupport}`, // Utiliza la plantilla de HTML con etiquetas <b> para resaltar el textoVoLTE: ${volteSupport}`,
      });
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    setLoading(false);

    Swal.fire({
      icon: "error",
      title: "Error de conexión",
      html: `Ocurrió un problema al comunicarse con el servidor. <br> <b>IMEI ingresado:</b> ${imei} <br> <b> Detalle: </b> ${error.message}`,
    });
  }
};