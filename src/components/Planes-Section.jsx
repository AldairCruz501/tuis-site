import './Planes-Section.css';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faWhatsapp, faInstagram, faSnapchat, faTelegram, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal';
import { useCart } from '../Context/Context';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

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

  const rowColsClass = plans.length === 4
    ? "row-cols-1 row-cols-md-2 row-cols-xl-4"
    : "row-cols-1 row-cols-md-2 row-cols-lg-3";

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
                    <div className="pricing-badge">
                        <span className="badge text-uppercase">{plan.new}</span>
                    </div>
                    <Card.Header className='py-3 bg-main-card-header rounded-top'>
                        <h4 className=' my-0 fw-bold plan-title-main text-uppercase fs-4'>
                            {plan.name} <span className='tuisty-gb-main'>{plan.dataPlus}</span>
                        </h4>
                    </Card.Header>
                    <div className='text-center p-3 bg-main-gb'>
                        <h4 className='my-0 fw-bold text-white text-uppercase display-4'>{plan.data}</h4>
                        <small className='text-white fw-light fs-5 text-uppercase'>
                            {plan.duration}
                        </small>
                    </div>
                    {plan.socialMedia && (
                            <>
                                <div className='d-flex justify-content-center p-3'>
                                    {plan.socialMedia.map((platform, idx) => (
                                        <span key={idx} className={`rounded mx-1 social-icon-${platform}`}>
                                            <FontAwesomeIcon
                                                icon={socialMediaIcons[platform]}
                                                className='fs-3'
                                            />
                                        </span>
                                    ))}
                                </div>
                                <div className='text-center pb-3 border-tuisty border-2 border-bottom'>
                                    <h4 className='my-0 fw-bold text-dark fs-6 text-uppercase'>
                                        {plan.socialText}
                                    </h4>
                                </div>
                            </>
                        )}
                        <div className='pt-4 pb-3 border-tuisty border-2 '>
                            <h4 className="fw-bold fs-3 text-uppercase">
                            <span className="icon-sms mx-2">
                                <FontAwesomeIcon icon={faEnvelope} className='fs-3' />
                            </span>
                            <span className='tuisty-gb'>{plan.sms}</span> SMS
                            </h4>
                            <div className=' border-tuisty border-2 border-top border-bottom pt-3 mt-2 pb-3'>
                                <h4 className='fw-bold fs-6 text-uppercase'>
                                    Llamadas a:
                                </h4>
                                <div className=' d-flex justify-content-center pt-3 mb-3'>
                                    <img src="/img/canada.png" alt="can-flag" className='w-25 mx-1' loading="lazy" />
                                    <img src="/img/estados-unidos.png" alt="usa-flag" className='w-25 mx-1' loading="lazy" />
                                    <img src="/img/mexico.png" alt="mx-flag" className='w-25 mx-1' loading="lazy" />
                                </div>
                            </div>
                            <p className='fw-bold fs-5 text-uppercase'>
                            <span className="icon-sms mx-2">
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                                Llamadas <span className='tuisty-gb'>{plan.call}</span>
                            </p>
                        </div>
                        <div className='p-4 bg-price'>
                            <h3 className='text-white fw-bold display-4'>
                                ${plan.price} MXN
                            </h3>
                        </div>
                    <Card.Body className='bg-body-card '>
                        {/*<Button
                            className="plan-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill border-light fs-4 mb-3"
                            onClick={() => handleBuyClick(plan)}
                        >
                            Comprar
                        </Button>*/}
                        <Button
                            className="plan-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill border-light fs-4 mb-3"
                            href='https://wa.link/8ixi0l' target='_blank'
                        >
                            Comprar
                        </Button>
                        <div className='accordion-section'>
                          <Accordion defaultActiveKey={null} flush>
                              <Accordion.Item eventKey='0' className='bg-body-card'>
                                  <Accordion.Header onClick={() => handleAccordionToggle(index)}>
                                      <h4 className='fw-bold fs-6 text-center text-white'>
                                          {openAccordions.includes(index) ? 'Ocultar Detalles' : 'Mostrar Detalles'}
                                      </h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                      <div className='border-light border-top border-2 border-bottom pt-4 pb-3'>
                                          <h4 className="fw-bold fs-6 text-white text-uppercase">
                                              {plan.internet}
                                          </h4>
                                      </div>
                                      <div className='border-light border-2 border-bottom pt-4 pb-1 text-white'>
                                          <h4 className="fw-bold fs-6">
                                              Formato de Chip:
                                          </h4>
                                          <ul className="list-unstyled mt-0">
                                              <li>SIM</li>
                                              <li>eSIM</li>
                                          </ul>
                                      </div>
                                      <div className='border-tuisty-in border-2 border-bottom pt-3 pb-2'>
                                          <a href={plan.linkfolio} className="fw-bold fs-6 text-uppercase folio-title text-decoration-none" target='_blank'>
                                            Folio: <span className='text-secondary fw-bold'>{plan.iftfolio}</span>
                                          </a>
                                      </div>
                                  </Accordion.Body>
                              </Accordion.Item>
                          </Accordion>
                        </div>
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
          <Button
            className="paq-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill fs-4 mt-3 mb-5 border-3 mx-3"
            href='https://byplus.io/inbtel' target='_blank'
          >
            Recargas
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
