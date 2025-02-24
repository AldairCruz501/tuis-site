import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeCart } from "../../components/storage/SaveUser";

export default function Success() {
    const navigate = useNavigate();

    useEffect(() => {
        //console.log("Iniciando redirección...");
        setTimeout(() => {
            removeCart();
            //console.log("Redirigiendo...");
            navigate("/");  // Redirecciona al inicio
        }, 2000);
    }, [navigate]);

    return (
        <>
            <h1>Gracias por tu compra. Redirigiendo...</h1>
        </>
    );
}
