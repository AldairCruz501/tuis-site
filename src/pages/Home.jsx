
import './Home.css'
import { useEffect, useState } from "react";
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { Carousel, Container, Card, Button, Row, Col, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSnapchat, faTelegram, faWhatsapp, faXTwitter, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { Slide, JackInTheBox } from 'react-awesome-reveal';
import Loading from '../components/Loading';


function Home() {
  const navigate = useNavigate();
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      };

      fetchData();
    }, []);

      return (
        <>
        <Loading loading={loading} />
          {!loading && (
            <>
              <NavbarComponent></NavbarComponent>
              <section>
                <Container fluid className="pt-4 pb-5 pb-lg-0">
                  <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-none d-lg-block w-75 m-auto"
                        src="img/banner-tuis1.png"
                        alt="Slide 1"
                        />
                        <img
                          className="d-block d-lg-none w-100 m-auto"
                          src="img/banner_carrusel_1.png"
                          alt="Slide 1"
                        />
                        <Carousel.Caption>
                        <div className='animated-button-container'>
                          <Button
                          className='border button fs-3 fw-bold p-3'
                          onClick={() => {
                            navigate("/paquetes")
                            window.scrollTo(0, 0);
                          }}
                        >
                          Ver Paquetes
                        </Button>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-none d-lg-block w-75 m-auto"
                        src="img/banner-tuis2.jpg"
                        alt="Slide 2"
                      />
                      <img
                        className="d-block d-lg-none w-100 m-auto"
                        src="img/banner_carrusel_2.png"
                        alt="Slide 2"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <div className='d-block d-lg-none pt-2 text-center'>
                          <a href="#planes">
                          <FontAwesomeIcon icon={faAngleDoubleDown} className='fs-3 pt-2 button-sm'></FontAwesomeIcon>
                          </a>
                  </div>
                </Container>
                <Container fluid className="carousel-info">
                  <div className="container p-4">
                    <Row className="align-items-center">
                      <Col xs={12} md={8} className="text-center text-md-start">
                        <h1 className="fw-bold text-white text-uppercase fs-3 fs-md-2 fst-italic">
                          Llamadas y SMS ilimitados
                        </h1>
                        <p className="fw-bold text-white text-uppercase fs-6 fs-md-5 fst-italic">
                          México | Usa | Canadá
                        </p>
                      </Col>
                      <Col xs={12} md={4} className="text-center text-md-end mt-3 mt-md-0">
                        <Button
                          className="button-info border border-3 fs-5 text-uppercase fw-bold fst-italic p-2"
                          onClick={() => {
                            //Este botón redirecciona a la página Acceder
                          }}
                        >
                          <div className="p-1">¡Únete a Tuis!</div>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </section>
              <main>
                <section>
                  <div className="tuisty-container">
                  <Container className="py-5">
                    <Row className="align-items-center">
                      <Col xs={12} lg={6} className="text-center text-lg-start">
                        <h1 className="plan-title display-4 display-lg-3 fst-italic text-white">
                          Plan Tuisty <br className="d-none d-md-block" /> Prime Ilimitado
                        </h1>
                        <ul className="features-list text-white text-start mt-3 p-4 px-4 p-lg-0 px-lg-0">
                          <li>Tarjeta SIM incluida</li>
                          <li>15GB Datos móviles</li>
                          <li>Llamadas ilimitadas</li>
                          <li>Mensajes ilimitados</li>
                          <li>Redes sociales ilimitadas</li>
                          <li>30 Días de duración</li>
                        </ul>
                        <div className="d-flex justify-content-center justify-content-lg-start mt-4 mb-4 text-white">
                          <span className="icon facebook-color rounded mx-2">
                            <FontAwesomeIcon icon={faFacebook} className="fs-5" />
                          </span>
                          <span className="icon x-color rounded mx-2">
                            <FontAwesomeIcon icon={faXTwitter} className="fs-5" />
                          </span>
                          <span className="icon whatsapp-color rounded mx-2">
                            <FontAwesomeIcon icon={faWhatsapp} className="fs-5" />
                          </span>
                          <span className="icon instagram-color rounded mx-2">
                            <FontAwesomeIcon icon={faInstagram} className="fs-5" />
                          </span>
                          <span className="icon snapchat-color rounded mx-2">
                            <FontAwesomeIcon icon={faSnapchat} className="fs-5 text-dark" />
                          </span>
                          <span className="icon telegram-color rounded mx-2">
                            <FontAwesomeIcon icon={faTelegram} className="fs-5" />
                          </span>
                        </div>
                        <Button 
                          className="contract-button border border-3 fs-5 text-uppercase fw-bold fst-italic p-2"
                          onClick={() => {
                            //Este botón redirecciona al carrito de compras
                          }}
                        >
                          Contratar
                        </Button>
                      </Col>
                      <Col xs={12} lg={6} className="text-center">
                        <img
                          src="img/chica-cel.png"
                          alt="Chica feliz"
                          className="img-fluid pt-5"
                        />
                      </Col>
                    </Row>
                  </Container>
                  </div>
                </section>
                <div className="wave">
                </div>
                <section>
                  <div className="tuisty-container-white p-4">
                  <Container>
                    <Row>
                      <Col lg={6}>
                        <h3 className='fs-4 fw-bold'>Recibe tu SIM directamente en la <br className='d-none d-md-block'/> puerta de tu casa</h3>
                        <p className='fs-5 pt-2'>Tiempo de entrega de 2 a 5 días hábiles</p>
                        <p className='fs-5 pt-2'>Métodos de pago:</p>
                        <div className='pt-2 pb-2'>
                        <img
                          src="img/metodos-de-pago.png"
                          alt="Metodos-de-pago"
                          className="img-fluid w-50"
                        />
                        </div>
                        <div className='mx-0 mx-md-5'>
                        <Button 
                          className="buy-button border border-3 fs-5 text-uppercase fw-bold fst-italic p-2 rounded-pill"
                          onClick={() => {
                            //Este botón redirecciona al carrito de compras
                          }}
                        >
                          Comprar sim
                        </Button>
                        </div>
                      </Col>
                      <Col lg={6}>
                      <Slide direction="right">
                        <img
                            src="img/mapache-delivery.png"
                            alt="Mapache-Delivery"
                            className="img-fluid pt-3 pt-md-0"
                          />
                      </Slide>
                      </Col>
                    </Row>
                  </Container>
                  </div>
                </section>
                <div className="wave-two">
                </div>
                <section id='planes' className="tuisty-container pt-5">
                  <Container>
                      <div className="p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-bold text-white">Planes de Telefonía Móvil Tuis</h1>
                        <p className="fs-5 text-white">
                        Conoces nuestros planes personalizados diseñados exclusivamente para los <span className='fw-bold fst-italic fs-4'>tuisters</span>
                        </p>
                      </div>
                      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4  text-center">
                        <JackInTheBox>
                          <Col className='card-efect'>
                              <Card className="mb-4 rounded-3 shadow-sm card">
                                <Card.Header className="py-3">
                                  <h4 className="my-0 fw-bold plan-title text-uppercase fs-4">Tuisty Semanal Ilimitado</h4>
                                </Card.Header>
                                <div className='text-center p-3 bg-gb'>
                                  <h4 className="my-0 fw-bold text-white text-uppercase display-5">3gb</h4>
                                  <h5 className="my-0 fw-bold text-white text-uppercase fs-4">Navegación</h5>
                                  </div>
                                <Card.Body>
                                  <div className='border-tuisty border-2 border-bottom'>
                                  <h1 className="card-title pricing-card-title fw-bold display-3">
                                    $59<small className="text-body-secondary fw-light fs-3">/7 días</small>
                                  </h1>
                                  </div>
                                  <div className='border-tuisty border-2 border-bottom mt-4'>
                                    <h4 className="fw-bold fs-6">
                                    Redes Sociales Nacionales ilimitadas:
                                    </h4>
                                    <div className='d-flex justify-content-center pt-3 mb-3'>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faFacebook} className='fs-3 social-fb m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faXTwitter} className='fs-3 m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faWhatsapp} className='fs-3 social-wp m-1'/>
                                      </span>
                                      <span className='rounded '>
                                        <FontAwesomeIcon icon={faInstagram} className='fs-3 social-ins m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faSnapchat} className='fs-3 social-sp m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faTelegram} className='fs-3 social-tel m-1' />
                                      </span>
                                    </div>
                                  </div>
                                  <div className='border-2 mt-4'>
                                    <h4 className="fw-bold fs-6">
                                      Llamadas y SMS ilimitadas a:
                                    </h4>
                                    <div className='d-flex justify-content-center pt-3 mb-3'>
                                      <img src="/img/canada.png" alt="" className='w-25 mx-1'/>
                                      <img src="/img/estados-unidos.png" alt="" className='w-25 mx-1'/>
                                      <img src="/img/mexico.png" alt="" className='w-25 mx-1'/>
                                    </div>
                                  </div>
                                  <Accordion defaultActiveKey={null} flush>
                                    <Accordion.Item eventKey='0'>
                                      <Accordion.Header>
                                        <h4 className="fw-bold fs-6 text-center">
                                          Conoce Más
                                      </h4>
                                      </Accordion.Header>
                                      <Accordion.Body>
                                        <div className='border-tuisty-in border-2 border-bottom mt-4'>
                                          <h4 className="fw-bold fs-6">
                                            Redes Sociales Internacionales Ilimitadas:
                                          </h4>
                                          <div className='d-flex justify-content-center pt-3 mb-3'>
                                            <span className='rounded'>
                                              <FontAwesomeIcon icon={faWhatsapp} className='fs-3 social-wp m-1'/>
                                            </span>
                                            <span className='rounded '>
                                              <FontAwesomeIcon icon={faFacebookMessenger} className='fs-3 social-mess m-1' />
                                            </span>
                                            <span className='rounded'>
                                              <FontAwesomeIcon icon={faTelegram} className='fs-3 social-tel m-1' />
                                            </span>
                                          </div>
                                        </div>
                                        <div className='border-tuisty-in border-2 border-bottom pt-4 pb-3'>
                                          <h4 className="fw-bold fs-6 internet-title text-uppercase">
                                            Si Comparte Internet
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
                                        <div className='border-tuisty-in border-2 border-bottom pt-4 pb-3'>
                                          <h4 className="fw-bold fs-6 text-uppercase folio-title">
                                            Folio: <span className='text-secondary fw-bold'>1640092</span>
                                          </h4>
                                        </div>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  </Accordion>
                                  {/* <Button 
                                    className='buy-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill fs-4 border-light'
                                    onClick={() => {
                                      //Este botón redirecciona al carrito de compras
                                    }}
                                  >
                                    Comprar
                                  </Button> */}
                                </Card.Body>
                              </Card>
                          </Col>
                        </JackInTheBox>
                        <JackInTheBox delay={500}>
                          <Col className='card-efect'>
                              <Card className="mb-4 rounded-3 shadow-sm card">
                                <Card.Header className="py-3">
                                  <h4 className="my-0 fw-bold plan-title text-uppercase fs-4">Tuisty Estándar Ilimitado</h4>
                                </Card.Header>
                                <div className='text-center p-3 bg-gb'>
                                  <h4 className="my-0 fw-bold text-white text-uppercase display-5">6gb</h4>
                                  <h5 className="my-0 fw-bold text-white text-uppercase fs-4">Navegación</h5>
                                  </div>
                                <Card.Body>
                                  <div className='border-tuisty border-2 border-bottom'>
                                  <h1 className="card-title pricing-card-title fw-bold display-3">
                                    $129<small className="text-body-secondary fw-light fs-3">/15 días</small>
                                  </h1>
                                  </div>
                                  <div className='border-tuisty border-2 border-bottom mt-4'>
                                    <h4 className="fw-bold fs-6">
                                    Redes Sociales Nacionales ilimitadas:
                                    </h4>
                                    <div className='d-flex justify-content-center pt-3 mb-3'>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faFacebook} className='fs-3 social-fb m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faXTwitter} className='fs-3 m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faWhatsapp} className='fs-3 social-wp m-1'/>
                                      </span>
                                      <span className='rounded '>
                                        <FontAwesomeIcon icon={faInstagram} className='fs-3 social-ins m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faSnapchat} className='fs-3 social-sp m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faTelegram} className='fs-3 social-tel m-1' />
                                      </span>
                                    </div>
                                  </div>
                                  <div className='border-2 mt-4'>
                                    <h4 className="fw-bold fs-6">
                                      Llamadas y SMS ilimitadas a:
                                    </h4>
                                    <div className='d-flex justify-content-center pt-3 mb-3'>
                                      <img src="/img/canada.png" alt="" className='w-25 mx-1'/>
                                      <img src="/img/estados-unidos.png" alt="" className='w-25 mx-1'/>
                                      <img src="/img/mexico.png" alt="" className='w-25 mx-1'/>
                                    </div>
                                  </div>
                                  <Accordion defaultActiveKey={null} flush>
                                    <Accordion.Item eventKey='0'>
                                      <Accordion.Header>
                                        <h4 className="fw-bold fs-6 text-center">
                                          Conoce Más
                                      </h4>
                                      </Accordion.Header>
                                      <Accordion.Body>
                                        <div className='border-tuisty-in border-2 border-bottom mt-4'>
                                          <h4 className="fw-bold fs-6">
                                            Redes Sociales Internacionales Ilimitadas:
                                          </h4>
                                          <div className='d-flex justify-content-center pt-3 mb-3'>
                                            <span className='rounded'>
                                              <FontAwesomeIcon icon={faWhatsapp} className='fs-3 social-wp m-1'/>
                                            </span>
                                            <span className='rounded '>
                                              <FontAwesomeIcon icon={faFacebookMessenger} className='fs-3 social-mess m-1' />
                                            </span>
                                            <span className='rounded'>
                                              <FontAwesomeIcon icon={faTelegram} className='fs-3 social-tel m-1' />
                                            </span>
                                          </div>
                                        </div>
                                        <div className='border-tuisty-in border-2 border-bottom pt-4 pb-3'>
                                          <h4 className="fw-bold fs-6 internet-title text-uppercase">
                                            Si Comparte Internet
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
                                        <div className='border-tuisty-in border-2 border-bottom pt-4 pb-3'>
                                          <h4 className="fw-bold fs-6 text-uppercase folio-title">
                                            Folio: <span className='text-secondary fw-bold'>1640110</span>
                                          </h4>
                                        </div>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  </Accordion>
                                  {/* <Button 
                                    className='buy-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill fs-4 border-light'
                                    onClick={() => {
                                      //Este botón redirecciona al carrito de compras
                                    }}
                                  >
                                    Comprar
                                  </Button> */}
                                </Card.Body>
                              </Card>
                          </Col>
                        </JackInTheBox>
                        <JackInTheBox delay={1000}>
                          <Col className='card-efect'>
                              <Card className="mb-4 rounded-3 shadow-sm card">
                                <Card.Header className="py-3">
                                  <h4 className="my-0 fw-bold plan-title text-uppercase fs-4">Tuisty Escencial Ilimitado</h4>
                                </Card.Header>
                                <div className='text-center p-3 bg-gb'>
                                  <h4 className="my-0 fw-bold text-white text-uppercase display-5">20gb</h4>
                                  <h5 className="my-0 fw-bold text-white text-uppercase fs-4">Navegación</h5>
                                  </div>
                                <Card.Body>
                                  <div className='border-tuisty border-2 border-bottom'>
                                  <h1 className="card-title pricing-card-title fw-bold display-3">
                                    $149<small className="text-body-secondary fw-light fs-3">/15 días</small>
                                  </h1>
                                  </div>
                                  <div className='border-tuisty border-2 border-bottom mt-4'>
                                    <h4 className="fw-bold fs-6">
                                    Redes Sociales Nacionales ilimitadas:
                                    </h4>
                                    <div className='d-flex justify-content-center pt-3 mb-3'>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faFacebook} className='fs-3 social-fb m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faXTwitter} className='fs-3 m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faWhatsapp} className='fs-3 social-wp m-1'/>
                                      </span>
                                      <span className='rounded '>
                                        <FontAwesomeIcon icon={faInstagram} className='fs-3 social-ins m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faSnapchat} className='fs-3 social-sp m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faTelegram} className='fs-3 social-tel m-1' />
                                      </span>
                                    </div>
                                  </div>
                                  <div className='border-2 mt-4'>
                                    <h4 className="fw-bold fs-6">
                                      Llamadas y SMS ilimitadas a:
                                    </h4>
                                    <div className='d-flex justify-content-center pt-3 mb-3'>
                                      <img src="/img/canada.png" alt="" className='w-25 mx-1'/>
                                      <img src="/img/estados-unidos.png" alt="" className='w-25 mx-1'/>
                                      <img src="/img/mexico.png" alt="" className='w-25 mx-1'/>
                                    </div>
                                  </div>
                                  <Accordion defaultActiveKey={null} flush>
                                    <Accordion.Item eventKey='0'>
                                      <Accordion.Header>
                                        <h4 className="fw-bold fs-6 text-center">
                                          Conoce Más
                                      </h4>
                                      </Accordion.Header>
                                      <Accordion.Body>
                                        <div className='border-tuisty-in border-2 border-bottom mt-4'>
                                          <h4 className="fw-bold fs-6">
                                            Redes Sociales Internacionales Ilimitadas:
                                          </h4>
                                          <div className='d-flex justify-content-center pt-3 mb-3'>
                                            <span className='rounded'>
                                              <FontAwesomeIcon icon={faWhatsapp} className='fs-3 social-wp m-1'/>
                                            </span>
                                            <span className='rounded '>
                                              <FontAwesomeIcon icon={faFacebookMessenger} className='fs-3 social-mess m-1' />
                                            </span>
                                            <span className='rounded'>
                                              <FontAwesomeIcon icon={faTelegram} className='fs-3 social-tel m-1' />
                                            </span>
                                          </div>
                                        </div>
                                        <div className='border-tuisty-in border-2 border-bottom pt-4 pb-3'>
                                          <h4 className="fw-bold fs-6 internet-title text-uppercase">
                                            Si Comparte Internet
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
                                        <div className='border-tuisty-in border-2 border-bottom pt-4 pb-3'>
                                          <h4 className="fw-bold fs-6 text-uppercase folio-title">
                                            Folio: <span className='text-secondary fw-bold'>1640123</span>
                                          </h4>
                                        </div>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  </Accordion>
                                  {/* <Button 
                                    className='buy-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill fs-4 border-light'
                                    onClick={() => {
                                      //Este botón redirecciona al carrito de compras
                                    }}
                                  >
                                    Comprar
                                  </Button> */}
                                </Card.Body>
                              </Card>
                          </Col>
                        </JackInTheBox>
                        <JackInTheBox delay={1500}>
                        <Col className='card-efect'>
                              <Card className="mb-4 rounded-3 shadow-sm card">
                                <Card.Header className="py-3">
                                  <h4 className="my-0 fw-bold plan-title text-uppercase fs-4">Tuisty Prime Ilimitado</h4>
                                </Card.Header>
                                <div className='text-center p-3 bg-gb'>
                                  <h4 className="my-0 fw-bold text-white text-uppercase display-5">15gb</h4>
                                  <h5 className="my-0 fw-bold text-white text-uppercase fs-4">Navegación</h5>
                                  </div>
                                <Card.Body>
                                  <div className='border-tuisty border-2 border-bottom'>
                                  <h1 className="card-title pricing-card-title fw-bold display-3">
                                    $229<small className="text-body-secondary fw-light fs-3">/30 días</small>
                                  </h1>
                                  </div>
                                  <div className='border-tuisty border-2 border-bottom mt-4'>
                                    <h4 className="fw-bold fs-6">
                                    Redes Sociales Nacionales ilimitadas:
                                    </h4>
                                    <div className='d-flex justify-content-center pt-3 mb-3'>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faFacebook} className='fs-3 social-fb m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faXTwitter} className='fs-3 m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faWhatsapp} className='fs-3 social-wp m-1'/>
                                      </span>
                                      <span className='rounded '>
                                        <FontAwesomeIcon icon={faInstagram} className='fs-3 social-ins m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faSnapchat} className='fs-3 social-sp m-1' />
                                      </span>
                                      <span className='rounded'>
                                        <FontAwesomeIcon icon={faTelegram} className='fs-3 social-tel m-1' />
                                      </span>
                                    </div>
                                  </div>
                                  <div className='border-2 mt-4'>
                                    <h4 className="fw-bold fs-6">
                                      Llamadas y SMS ilimitadas a:
                                    </h4>
                                    <div className='d-flex justify-content-center pt-3 mb-3'>
                                      <img src="/img/canada.png" alt="" className='w-25 mx-1'/>
                                      <img src="/img/estados-unidos.png" alt="" className='w-25 mx-1'/>
                                      <img src="/img/mexico.png" alt="" className='w-25 mx-1'/>
                                    </div>
                                  </div>
                                  <Accordion defaultActiveKey={null} flush>
                                    <Accordion.Item eventKey='0'>
                                      <Accordion.Header>
                                        <h4 className="fw-bold fs-6 text-center">
                                          Conoce Más
                                      </h4>
                                      </Accordion.Header>
                                      <Accordion.Body>
                                        <div className='border-tuisty-in border-2 border-bottom mt-4'>
                                          <h4 className="fw-bold fs-6">
                                            Redes Sociales Internacionales Ilimitadas:
                                          </h4>
                                          <div className='d-flex justify-content-center pt-3 mb-3'>
                                            <span className='rounded'>
                                              <FontAwesomeIcon icon={faWhatsapp} className='fs-3 social-wp m-1'/>
                                            </span>
                                            <span className='rounded '>
                                              <FontAwesomeIcon icon={faFacebookMessenger} className='fs-3 social-mess m-1' />
                                            </span>
                                            <span className='rounded'>
                                              <FontAwesomeIcon icon={faTelegram} className='fs-3 social-tel m-1' />
                                            </span>
                                          </div>
                                        </div>
                                        <div className='border-tuisty-in border-2 border-bottom pt-4 pb-3'>
                                          <h4 className="fw-bold fs-6 internet-title text-uppercase">
                                            Si Comparte Internet
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
                                        <div className='border-tuisty-in border-2 border-bottom pt-4 pb-3'>
                                          <h4 className="fw-bold fs-6 text-uppercase folio-title">
                                            Folio: <span className='text-secondary fw-bold'>1644057</span>
                                          </h4>
                                        </div>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  </Accordion>
                                  {/* <Button 
                                    className='buy-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill fs-4 border-light'
                                    onClick={() => {
                                      //Este botón redirecciona al carrito de compras
                                    }}
                                  >
                                    Comprar
                                  </Button> */}
                                </Card.Body>
                              </Card>
                          </Col>
                        </JackInTheBox>
                      </Row>
                      <div className="p-3 pb-md-4 mx-auto text-center">
                        <div className="mb-1">
                          <Link to="/terminos-y-condiciones" onClick={handleScrollToTop} className="fs-6 text-white fw-bold text-decoration-none link-btn">Conoce Términos y condiciones</Link>
                        </div>
                        <div className="mb-1"> 
                          <Link to="/politica-uso-justo" className="fs-6 text-white fw-bold text-decoration-none link-btn" target="_blank">Políticas de uso justo</Link>
                        </div>
                      </div>
                  </Container>
                </section>
                <section>
                <div className="tuisty-container-white p-5">
                  <Container>
                    <Row className="align-items-center">
                      <Col lg={6} className="text-center mb-4 mb-lg-0">
                      <Slide>
                        <img
                            src="img/Tuisty.png"
                            alt="Mapache-Delivery"
                            className="img-fluid"
                          />
                      </Slide>
                      </Col>
                      <Col lg={6}>
                        <div className="pt-3 text-center text-lg-start">
                          <h3 className="display-3 fw-bold text-uppercase tuisty-title">
                            Razones para cambiarte a{" "}
                            <img
                              src="img/Tuis-logotipo.png"
                              className="w-25"
                              alt="tuis-log"
                            />
                          </h3>
                        </div>
                        <Row className="row-cols-1 row-cols-md-2 g-4">
                          <Col className="text-center">
                            <Button className="w-75 btn-tuisty rounded-4">
                              <h3 className="display-5 fw-bold">4.5G</h3>
                            </Button>
                            <p className="pt-2 tuisty-text">
                              Cobertura total con excelente red en México
                            </p>
                          </Col>
                          <Col className="text-center">
                            <img
                              src="img/mapa-mexico.png"
                              alt="mapa-mexico"
                              className="w-50"
                            />
                            <p className="pt-2 tuisty-text">Cobertura Nacional</p>
                          </Col>
                          <Col className="text-center">
                            <img
                              src="img/precios.png"
                              alt="precios"
                              className="w-50"
                            />
                            <p className="pt-2 tuisty-text">
                              Excelentes ofertas y precios competitivos
                            </p>
                          </Col>
                          <Col className="text-center">
                            <img
                              src="img/portabilidad.png"
                              alt="portabilidad"
                              className="w-50"
                            />
                            <p className="pt-2 tuisty-text">Porta tu número con nosotros</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
                </section>
              </main>
              <FooterComponent></FooterComponent>
            </>
          )}
        </>
      );
}

export default Home
