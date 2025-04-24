import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    
    const titles = {
      "/": "Tuis | Telefonía Móvil",
      "/paquetes": "Paquetes | Tuis",
      "/paquetes/tuisty-express": "Tuisty Express | Tuis",
      "/paquetes/tuisty-mensual": "Tuisty Mensual | Tuis",
      "/paquetes/tuisty-trimestral": "Tuisty Trimestral | Tuis",
      "/paquetes/tuisty-semestral": "Tuisty Semestral | Tuis",
      "/paquetes/tuisty-anual": "Tuisty Anual | Tuis",
      "/cobertura": "Cobertura | Tuis",
      "/compatibilidad": "Compatibilidad | Tuis",
      "/nosotros": "Nosotros | Tuis",
      "/acceder": "Acceder | Tuis",
      "/aviso-de-privacidad": "Aviso de Privacidad | Tuis",
      "/terminos-y-condiciones": "Términos y Condiciones | Tuis",
      "/portabilidad-ift": "Portabilidad IFT | Tuis",
      "/contrato-adhesion-profeco": "Contrato de Adhesion | Tuis",
      "/carta-derechos-min": "Carta de derechos | Tuis",
      "/politica-uso-justo": "/Política de Uso Justo | Tuis",
      "/colaboracion-justicia": "Colaboracion con la Justicia| Tuis",
      "/cod-practicas-comerciales": "Código de Prácticas Comerciales | Tuis",
    };

    // Establecer el título según la ruta actual, con un fallback
    document.title = titles[location.pathname] || "Tuis";
  }, [location.pathname]);
};


export default usePageTitle;
