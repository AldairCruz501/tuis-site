import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import "./Compatibilidad.css";
import { verifyImei } from "../components/alertas";
import Loading from "../components/Loading";
import FloatingWhatsAppButton from "../components/WhatsApp-Button";
import ShippingTerms from "../components/Shipping-Terms";
import AppStoreTuis from "../components/AppStoreTuis";

export default function Compatibilidad() {
  const [imei, setImei] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImeiChange = (e) => {
    setImei(e.target.value);
  };

  const handleVerifyImei = () => {
    verifyImei(imei, setLoading);
  };
  return (
    <>
      <Loading />
      {!loading && (
        <>
          <NavbarComponent />
          <section className="pt-5 pb-5">
            <Container className="my-5 container-imei">
              <Row className="justify-content-center">
                <Col lg={10}>
                  <Row className="align-items-center">
                    {/* Columna de texto */}
                    <Col md={6}>
                      <h2 className="display-3 fw-bold compatibilidad-title pt-5 mt-5">
                        Verificar IMEI
                      </h2>
                      <p className="pt-2 fs-5 fw-bold nosotros-paragraph">
                        <strong>¿Cómo obtener el número de IMEI?</strong>
                      </p>
                      <p>
                        Marca{" "}
                        <strong className="compatibilidad-title">*#06#</strong>{" "}
                        desde tu dispositivo móvil para obtener el IMEI o busca
                        una etiqueta debajo de la batería de tu teléfono.
                      </p>
                      <Form>
                        <Form.Group className="mb-3" controlId="imei">
                          <Form.Label>Ingresa tu IMEI:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="IMEI de 15 dígitos"
                            value={imei}
                            onChange={handleImeiChange}
                          />
                        </Form.Group>
                        <div className="text-center">
                          <Button
                            className="btn-custom"
                            onClick={handleVerifyImei}
                            disabled={loading}
                          >
                            {loading ? "Verificando..." : "Verificar IMEI"}
                          </Button>
                        </div>
                      </Form>
                    </Col>

                    {/* Columna de imagen */}
                    <Col md={6} className="text-center">
                      <img
                        src="/img/phone_imei2.png"
                        alt="Cómo obtener IMEI"
                        className="img-fluid"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <ShippingTerms/>
          <AppStoreTuis/>
          <FloatingWhatsAppButton/>
          <FooterComponent />
        </>
      )}
    </>
  );
}
