
import './Home.css'
import { useEffect, useState } from "react";
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { Carousel, Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSnapchat, faTelegram, faWhatsapp, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import Loading from '../components/Loading';
import PlanesMain from '../components/Planes-Main';
import { planesData } from '../data';
import FloatingWhatsAppButton from '../components/WhatsApp-Button';
import AppStoreTuis from '../components/AppStoreTuis';



function Home() {
  const navigate = useNavigate();
  const { plans } = planesData.planesTuistyMainPage;
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
              <NavbarComponent/>
              <section>
                <Container fluid className="pt-4 pb-5 pb-lg-0">
                  <Carousel
                    prevIcon={
                      <span className='btn-prev'>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                      </span>
                    }
                    nextIcon={
                      <span className='btn-next'>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    } 
                  >
                    <Carousel.Item>
                        <img
                        className="d-none d-lg-block w-75 m-auto"
                        src="img/banner-tuis1.png"
                        alt="Slide 1"
                        loading="lazy"
                        />
                        <img
                          className="d-block d-lg-none w-100 m-auto"
                          src="img/banner_carrusel_1.png"
                          alt="Slide 1"
                          loading="lazy"
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
                        src="img/banner-tuis3.png"
                        alt="Slide 2"
                        loading="lazy"
                      />
                      <img
                        className="d-block d-lg-none w-100 m-auto"
                        src="img/banner_carrusel_3.png"
                        alt="Slide 2"
                        loading="lazy"
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
                          /*onClick={() => {
                            navigate("/acceder")
                            window.scrollTo(0, 0);
                          }}*/
                        >
                          <div className="p-1">¡Únete a Tuis!</div>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </section>
              <section>
                <Fade>
                  <Carousel fade controls={false} indicators={false}>
                    <Carousel.Item interval={5000}>
                      <Link
                        to="/terminos-y-condiciones"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="fs-6 text-white fw-bold text-decoration-none link-btn"
                      >
                        <img
                          src="/img/eSim5GB.jpg"
                          alt="Banner-Tuis"
                          className="d-block w-100"
                          loading="lazy"
                        />
                      </Link>
                    </Carousel.Item >
                    <Carousel.Item interval={5000}>
                      <Link
                          to="/terminos-y-condiciones"
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                          className="fs-6 text-white fw-bold text-decoration-none link-btn"
                        >
                          <img
                            src="/img/eSim15GB.jpg"
                            alt="Banner-Tuis"
                            className="d-block w-100"
                            loading="lazy"
                          />
                        </Link>
                    </Carousel.Item>
                  </Carousel>
                </Fade>
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
                            <FontAwesomeIcon icon={faSnapchat} className="fs-5" />
                          </span>
                          <span className="icon telegram-color rounded mx-2">
                            <FontAwesomeIcon icon={faTelegram} className="fs-5" />
                          </span>
                        </div>
                        <Button 
                          className="contract-button border border-3 fs-5 text-uppercase fw-bold fst-italic p-2"
                          href='#planes'
                        >
                          Contratar
                        </Button>
                      </Col>
                      <Col xs={12} lg={6} className="text-center">
                        <img
                          src="img/chica-cel.png"
                          alt="Chica feliz"
                          className="img-fluid pt-5"
                          loading="lazy"
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
                        <h3 className='fs-4 fw-bold'>Recibe tu SIM directamente en la <br className='d-none d-md-block'/> puerta de tu casa<span className='fw-bold'>*</span></h3>
                        <p className='fs-5 pt-2'>Tiempo de entrega de 2 a 5 días hábiles</p>
                        <p className='fs-5 pt-2'>Métodos de pago:</p>
                        <div className='pt-2 pb-2'>
                        <img
                          src="img/metodos-de-pago.png"
                          alt="Metodos-de-pago"
                          className="img-fluid w-50"
                          loading="lazy"
                        />
                        </div>
                        <div className='mx-0 mx-md-5'>
                          <Button 
                            className="buy-button border border-3 fs-5 text-uppercase fw-bold fst-italic p-2 rounded-pill"
                            onClick={() => {
                              navigate("/paquetes")
                            }}
                          >
                            Comprar sim
                          </Button>
                        </div>
                        <div className='mx-0 mx-md-1 mt-5'>
                          <p className='fst-italic'>
                            *Los envíos solo se realizan en domicilios de la Zona Conurbada de Tamaulipas (Altamira, Ciudad Madero y Tampico).
                          </p>
                        </div>
                      </Col>
                      <Col lg={6}>
                      <Slide direction="right">
                        <img
                            src="img/mapache-delivery.png"
                            alt="Mapache-Delivery"
                            className="img-fluid pt-3 pt-md-0"
                            loading="lazy"
                          />
                      </Slide>
                      </Col>
                    </Row>
                  </Container>
                  </div>
                </section>
                <div className="wave-two">
                </div>
                <PlanesMain
                  plans={plans}
                />
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
                            loading="lazy"
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
                              loading="lazy"
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
                              loading="lazy"
                            />
                            <p className="pt-2 tuisty-text">Cobertura Nacional</p>
                          </Col>
                          <Col className="text-center">
                            <img
                              src="img/precios.png"
                              alt="precios"
                              className="w-50"
                              loading="lazy"
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
                              loading="lazy"
                            />
                            <p className="pt-2 tuisty-text">Porta tu número con nosotros</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
                </section>
                <AppStoreTuis/>
              </main>
              <FloatingWhatsAppButton/>
              <FooterComponent/>
            </>
          )}
        </>
      );
}

export default Home
