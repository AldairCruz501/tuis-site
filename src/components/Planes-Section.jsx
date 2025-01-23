import { useState } from 'react';
import './Planes-Section.css'
import { Container, Row, Col, Card, Button, CardBody } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faWhatsapp, faInstagram, faSnapchat, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { JackInTheBox } from 'react-awesome-reveal';

const socialMediaIcons = {
    facebook: faFacebook,
    twitter: faXTwitter,
    whatsapp: faWhatsapp,
    instagram: faInstagram,
    snapchat: faSnapchat,
    telegram: faTelegram,
  };
  


const PlanesSection = ({ plans }) => {
    const rowColsClass = plans.length === 2 ? "row-cols-1 row-cols-md-2" : "row-cols-1 row-cols-md-2 row-cols-lg-4";
    const navigate = useNavigate();
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      };

    return (
        <section id="planes">
        <div className="tuisty-container pt-5">
          <Container>
            <JackInTheBox>
                <Row className={`${rowColsClass} text-center`}>
                {plans.map((plan, index) => (
                    <Col key={index} className='card-efect'>
                        <Card className='mb-4 rounded-3 shadow-sm card'>
                            <Card.Header className='py-3'>
                                <h4 className="my-0 fw-bold text-primary text-uppercase fs-2">{plan.name}</h4>
                            </Card.Header>
                            <div className='text-center p-3 bg-gb'>
                                <h4 className="my-0 fw-bold text-white text-uppercase display-5">{plan.data}</h4>
                                <h5 className="my-0 fw-bold text-white text-uppercase fs-4">{plan.usage}</h5>
                            </div>
                            <Card.Body>
                                <div className='border-primary border-2 border-bottom'>
                                    <h1 className='card-title pricing-card-title fw-bold display-3 '>
                                        {plan.price}
                                    </h1>
                                </div>
                                <ul className="list-unstyled mt-3 mb-4 fw-bold">
                                    <li>{plan.minutes} Minutos</li>
                                    <li>{plan.sms} SMS</li>
                                </ul>
                                {plan.socialMedia && (
                                    <>
                                        <div className="text-center p-3">
                                            <h4 className="my-0 fw-bold text-dark fs-5">
                                            Redes Sociales Ilimitadas*
                                            </h4>
                                        </div>
                                        <div className="d-flex justify-content-center pt-3 mb-3">
                                            {plan.socialMedia.map((platform, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`rounded mx-1 social-icon-${platform}`}
                                                >
                                                    <FontAwesomeIcon
                                                    icon={socialMediaIcons[platform]}
                                                    className="fs-3"
                                                    />
                                                </span>
                                            ))}
                                        </div>
                                    </>
                                )}
                                <Button 
                                className="plan-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill border-light fs-4"
                                onClick={() => {
                                    //Este botón redirecciona al carrito de compras
                                }}
                                >
                                    Comprar
                                </Button>
                                <div className='text-center p-3'>
                                    <p className="my-0 fw-bold text-dark fs-6">Duración: {plan.duration}</p>
                                    <p className="my-0 text-secondary fs-6">{plan.iftfolio}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            </JackInTheBox>
            <div className="p-3 pb-md-4 mx-auto text-center">
                <Button 
                  className="paq-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill fs-4 mt-3 mb-5 border-3"
                  onClick={() => {
                    navigate("/paquetes");
                    window.scrollTo(0, 0);
                }}
                >
                    Más Paquetes
                </Button>
                <div className="mb-3"> 
                    <p className='fs-5 text-white fw-bold'>
                    Para más información sobre nuestras tarifas, puedes consultar el Buscador de tarifas del Registro Público de
                    Telecomunicaciones <a href='https://tarifas.ift.org.mx/ift_visor/' target='_blank' className="fs-6 fw-bold text-decoration-none link-ift">https://tarifas.ift.org.mx/ift_visor/</a>
                    </p>
                </div>
                <div className="mb-1">
                  <Link to="/terminos-y-condiciones" onClick={handleScrollToTop} className="fs-6 text-white fw-bold text-decoration-none link-btn">Conoce Términos y condiciones</Link>
                </div>
                <div className="mb-1"> 
                  <Link to="/politica-uso-justo" className="fs-6 text-white fw-bold text-decoration-none link-btn" target="_blank">Políticas de uso justo</Link>
                </div>
            </div>
          </Container>
        </div>
      </section>
    );
};

export default PlanesSection;