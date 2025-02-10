import './Planes-Section.css';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faWhatsapp, faInstagram, faSnapchat, faTelegram, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal';
import { useCart } from '../Context/Context';
import {useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const socialMediaIcons = {
  whatsapp: faWhatsapp,
  facebook: faFacebook,
  twitter: faXTwitter,
  instagram: faInstagram,
  snapchat: faSnapchat,
  telegram: faTelegram,
  messenger: faFacebookMessenger,
};

const PlanesSection = ({ plans }) => {
    const [openAccordions, setOpenAccordions] = useState([]);
    const navigate = useNavigate();
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      };

  const rowColsClass = plans.length === 2
    ? "row-cols-1 row-cols-md-2 row-cols-lg-3"
    : "row-cols-1 row-cols-md-2 row-cols-lg-4";

  const { addToCart } = useCart();

  const handleAccordionToggle = (index) => {
    setOpenAccordions((prevState) =>
      prevState.includes(index)
        ? prevState.filter((item) => item !== index) // Si ya está abierto, lo cerramos
        : [...prevState, index] // Si no está abierto, lo abrimos
    );
  };


  const handleBuyClick = async (plan) => {
    const { value: isChecked, isConfirmed, isDismissed } = await Swal.fire({
      title: "¿Haz verificado tu IMEI?",
      icon: "question",
      input: "checkbox",
      inputPlaceholder: "He verificado el IMEI en mi dispositivo",
      confirmButtonText: "Continuar",
      cancelButtonText: "Validar mi IMEI",
      inputValidator: (result) => {
        return !result && "Debes verificar tu IMEI para continuar";
      },
      showCancelButton: true,
      allowOutsideClick: false,
    });
  
    // Si el usuario confirma y ha marcado el checkbox, agrega el producto al carrito
    if (isConfirmed && isChecked) {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Producto agregado al Carrito",
      });
      addToCart(plan); // Solo se ejecuta si el checkbox está marcado y el usuario confirmó
    } 
    // Si el usuario hace clic en Verificar Imei, redirige a compatibilidad sin agregar al carrito
    else if (isDismissed) {
      window.location.href = '/compatibilidad'; // Redirigir a la página de compatibilidad
    }
  };
  

  return (
    <section id="planes" className="tuisty-container pt-5">
      <Container>
        <Row className={`${rowColsClass} text-center`}>
          {plans.map((plan, index) => (
            <Fade key={index} delay={index * 600}>
              <Col key={index} className='card-efect'>
                <Card className='mb-4 rounded-3 shadow-sm card'>
                  <Card.Header className='py-3'>
                    <h4 className="my-0 fw-bold plan-title text-uppercase fs-4">
                      {plan.name} <span className='tuisty-gb'>{plan.dataPlus}</span><br />Ilimitado {plan.durationPlus}
                    </h4>
                  </Card.Header>
                  <div className='text-center p-3 bg-gb'>
                    <h4 className="my-0 fw-bold text-white text-uppercase display-5">{plan.data}</h4>
                    <h5 className="my-0 fw-bold text-white text-uppercase fs-4">{plan.usage}</h5>
                  </div>
                  <Card.Body>
                    <div className='border-tuisty border-2 border-bottom'>
                      <h1 className='card-title pricing-card-title fw-bold display-3'>
                        ${plan.price}
                      </h1>
                      <p>
                        <small className="text-body-secondary fw-light fs-4">{plan.duration}</small>
                      </p>
                    </div>
                    {plan.socialMedia && (
                      <>
                        <div className="text-center p-3">
                          <h4 className="my-0 fw-bold text-dark fs-6">
                            Redes Sociales Nacionales Ilimitadas:
                          </h4>
                        </div>
                        <div className="d-flex justify-content-center pt-3 pb-3 border-tuisty border-2 border-bottom">
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
                    <div className='border-tuisty border-2 border-bottom mt-4 pb-3'>
                      <h4 className="fw-bold fs-6">
                        Llamadas y SMS Ilimitados a:
                      </h4>
                      <div className='d-flex justify-content-center pt-3 mb-3'>
                        <img src="/img/canada.png" alt="can-flag" className='w-25 mx-1' />
                        <img src="/img/estados-unidos.png" alt="usa-flag" className='w-25 mx-1' />
                        <img src="/img/mexico.png" alt="mx-flag" className='w-25 mx-1' />
                      </div>
                    </div>
                    <Accordion defaultActiveKey={null} flush className='border-tuisty border-2 border-bottom mt-2 pb-2'>
                      <Accordion.Item eventKey='0'>
                        <Accordion.Header onClick={() => handleAccordionToggle(index)}>
                          <h4 className="fw-bold fs-6 text-center">
                            {openAccordions.includes(index) ? 'Ocultar Detalles' : 'Mostrar Detalles'}
                          </h4>
                        </Accordion.Header>
                        <Accordion.Body>
                          {plan.socialMediaInter && (
                            <>
                              <div className='border-tuisty-in border-2 border-bottom border-top mt-4 p-2'>
                                <div className="text-center p-3">
                                  <h4 className="my-0 fw-bold text-dark fs-6">
                                    Redes Sociales Internacionales Ilimitadas:
                                  </h4>
                                </div>
                                <div className="d-flex justify-content-center pt-3 mb-3">
                                  {plan.socialMediaInter.map((platform, idx) => (
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
                              </div>
                            </>
                          )}
                          <div className='border-tuisty-in border-2 border-bottom pt-4 pb-3'>
                            <h4 className="fw-bold fs-6 internet-title text-uppercase">
                              {plan.internet}
                            </h4>
                          </div>
                          <div className='border-tuisty-in border-2 border-bottom pt-4 pb-1'>
                            <h4 className="fw-bold fs-6">
                              Formato de Chip:
                            </h4>
                            <ul className="list-unstyled mt-0">
                              <li>SIM</li>
                              <li>eSIM</li>
                            </ul>
                          </div>
                          <div className='pt-4'>
                            <h4 className="fw-bold fs-6 text-uppercase folio-title">
                              Folio: <span className='text-secondary fw-bold'>{plan.iftfolio}</span>
                            </h4>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Button
                      className="plan-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill border-light fs-4 mb-3"
                      onClick={() => handleBuyClick(plan)}
                    >
                      Comprar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Fade>
          ))}
        </Row>
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
    </section>
  );
};

export default PlanesSection;
