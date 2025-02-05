
import { Button } from "react-bootstrap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatingWhatsAppButton = ({ position = "bottom-left" }) => {
    const whatsappUrl = `https://wa.link/8ixi0l`;
  
    const positionStyles = {
      position: "fixed",
      bottom: "20px",
      right: position === "bottom-right" ? "20px" : "auto",
      left: position === "bottom-left" ? "20px" : "auto",
      zIndex: 1000,
    };

    return (
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={positionStyles}>
        <Button style={{ backgroundColor: "#25D366", borderColor: "#25D366" }} className="rounded-circle p-3 shadow-lg">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </Button>
      </a>
    );
  };
  
  export default FloatingWhatsAppButton;