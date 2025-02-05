import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Pasarela.css";

const Pasarela = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simula un tiempo de espera antes de redirigir a la pasarela de pagos real
    const timer = setTimeout(() => {
      // Aquí deberías reemplazar con la URL de la pasarela de pagos
      window.location.href = "https://sandbox.connect.example.com";
    }, 2000);

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, []);

  return (
    <div className="pasarela-container">
      <h1>Redirigiendo a la pasarela de pagos...</h1>
      <p>Por favor, espera un momento.</p>
    </div>
  );
};

export default Pasarela;
