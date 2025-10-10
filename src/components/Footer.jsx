
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faSquareEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function FooterComponent () {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
    return (
        <footer className="footer container-fluid">
        <Container>
          <Row>
            <Col md={4} className="footer-section">
              <Link to="/" onClick={handleScrollToTop} className="text-decoration-none">
                <img
                  className="footer-logo mt-5"
                  src="/img/Tuis-Logotipo-Blanco.png"
                  alt="logo-tuis"
                  loading="lazy"
                />
              </Link>
              <div className="social-icons">
                <a href="https://www.facebook.com/Tuismx" target="_blank" className="social-icon">
                <FontAwesomeIcon  icon={faSquareFacebook}/>
                </a>
                <a href="https://www.instagram.com/tuis.mx" target="_blank" className="social-icon">
                <FontAwesomeIcon  icon={faSquareInstagram}/>
                </a>
              </div>
              <img
                className="footer-logo"
                src="/img/911.jpg"
                alt="logo-tuis"
                loading="lazy"
              />
            </Col>
            <Col md={4} className="footer-section">
              <h3 className="fw-bold mb-4 mt-5 fs-2">Contáctanos</h3>
              <p className="fs-5"><FontAwesomeIcon  icon={faLocationDot}/> Tamaulipas 607 Tampico Centro<br/>89000 Tampico, Tamaulipas, México</p>
              <div className="mt-4">
              <a href="tel:5595216000" className="d-flex fs-5 text-decoration-none text-white">
                <FontAwesomeIcon className="fs-3 me-2" icon={faSquarePhone}/> 55 9521 6000
              </a>
              <a href="mailto:ventas@tuis.com.mx" className="d-flex fs-5 text-decoration-none text-white">
                <FontAwesomeIcon className="fs-3 me-2" icon={faSquareEnvelope} /> ventas@tuis.com.mx
              </a>
              <p className="fs-5 mt-4"><FontAwesomeIcon  icon={faWhatsapp}/> Horario de atención (WhatsApp):<br/>
               Lunes a Viernes 8:00am a 6:00pm <br />
               Sábado: 8:00am a 2:00pm
              </p>
              </div>
            </Col>
            <Col md={4} className="footer-section">
            <h3 className="fw-bold mb-4 mt-5 fs-2">Legal</h3>
              <ul className="footer-links">
                <li className="fs-5">
                  <Link to="/portabilidad-ift" className="text-decoration-none text-white" target="_blank">Portabilidad</Link>
                </li>
                <li className="fs-5">
                  <Link to="/paquetes" onClick={handleScrollToTop} className="text-decoration-none text-white">Paquetes Tuis Móvil</Link>
                </li>
                <li className="fs-5">
                  <Link to="/nosotros" onClick={handleScrollToTop} className="text-decoration-none text-white">Conoce Tuis</Link>
                </li>
                <li className="fs-5">
                  <Link to="/contrato-adhesion-profeco" className="text-decoration-none text-white" target="_blank">Contrato de adhesión con Profeco</Link>
                </li>
                <li className="fs-5">
                  <Link to="/carta-derechos-min" className="text-decoration-none text-white" target="_blank">Derechos de los usuarios</Link>
                </li>
                <li className="fs-5">
                  <Link to="/politica-uso-justo" className="text-decoration-none text-white" target="_blank">Política de uso justo</Link>
                </li>
                <li className="fs-5">
                  <Link to="/colaboracion-con-la-justicia" className="text-decoration-none text-white">Colaboración con la Justicia</Link>
                </li>
                <li className="fs-5">
                  <Link to="/cod-practicas-comerciales" className="text-decoration-none text-white" target="_blank">Código de prácticas comerciales</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="footer-bottom border-top border-2">
            <Col lg={6}>
              <p className="mt-3 footer-reserved">
                Todos los derechos reservados por Tuis By INBTEL
              </p>
            </Col>
            <Col lg={6}>
              <p className="mt-3">
                <span className="footer-links-bottom">
                  <Link to="/terminos-y-condiciones" onClick={handleScrollToTop}>Términos y Condiciones</Link>
                    <br className="d-block d-sm-none" />
                  <Link to="/aviso-de-privacidad" onClick={handleScrollToTop}>Aviso de Privacidad</Link>
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}