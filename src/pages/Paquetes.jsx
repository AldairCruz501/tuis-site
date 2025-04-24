import './Paquetes.css'
import { useEffect, useState } from "react";
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Fade, JackInTheBox } from "react-awesome-reveal";
import Loading from '../components/Loading';
import ShippingTerms from '../components/Shipping-Terms';
import FloatingWhatsAppButton from '../components/WhatsApp-Button';
import AppStoreTuis from '../components/AppStoreTuis';



function Paquetes() {
    const navigate = useNavigate();
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
                <Fade>
                <section className='position-relative overflow-hidden text-center hero-bg carousel-fade'>
                    <Container className='col-md-6 p-lg-5 mx-auto my-auto'>
                        <div className='pt-5 mt-5'>
                            <h1 className='display-1 fw-bold text-uppercase text-white hero-tuis-title'>Paquetes Tuisty</h1>
                            <Button className='fst-italic p-1 px-4 rounded-pill fs-4 btn-hero border-2' href='#planes'>
                                Ver Paquetes
                            </Button>
                        </div>
                    </Container>
                </section>
                </Fade>
                <main>
                    <section>
                        <Container className='px-4 py-5'>
                            <Row className='row-cols-1 row-cols-md-2 algins-items-md-center g-5 py-5'>
                                <Col className=' d-flex flex-column algins-items-start gap-2'>
                                    <h2 className='display-5 fw-bold hero-tuis-subtitle'>Dale un giro a tu señal, dale Tuis</h2>
                                    <p className='text-dark fs-5'>
                                        En Tuis, entendemos que cada persona tiene necesidades y estilos de vida 
                                        diferentes. Por eso, hemos diseñado planes de telefonía móvil a tu medida, 
                                        con tarifas accesibles y beneficios exclusivos. Ya sea que busques
                                        más datos para estar siempre conectado, minutos ilimitados para no perderte 
                                        ninguna conversación, o la mejor cobertura donde quiera que vayas, en Tuis lo
                                        tenemos todo.
                                    </p>
                                </Col>
                                <Col>
                                    <p className='text-dark fs-3 fw-bold'>
                                        Con Tuis, disfrutarás de:
                                    </p>
                                    <Row className='row-cols-1 row-cols-sm-2 g-4'>
                                        <Col className="text-center">
                                            <img
                                                src="/img/mapa-mexico.png"
                                                alt="mapa-mexico"
                                                className="w-75"
                                                loading="lazy"
                                            />
                                            <p className="pt-2 fs-6 fw-bold">
                                                Cobertura extendida para que 
                                                siempre tengas señal, incluso
                                                en las zonas más remotas.
                                            </p>
                                        </Col>
                                        <Col className="text-center">
                                            <img
                                                src="/img/precios.png"
                                                alt="precios"
                                                className="w-50"
                                                loading="lazy"
                                            />
                                            <p className="pt-2 fs-6 fw-bold">
                                                Planes personalizados que se ajustan
                                                a tu consumo, para que pagues solo
                                                por lo que realmente necesitas.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="12" className=' d-flex flex-column algins-items-center gap-2'>
                                    <p className='text-dark fs-4 text-center'>
                                        Únete a Tuis y lleva tu experiencia móvil al siguiente nivel. ¡Descubre nuestras promociones y empieza a
                                        disfrutar de una señal que nunca te dejará desconectado!
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section id='planes' className="planes-container pt-5">
                        <Container>
                            <div className="p-3 pb-md-4 mx-auto text-center">
                                <h1 className="display-4 fw-bold text-white">Planes de Telefonía Móvil Tuis</h1>
                                <p className="fs-5 text-white">
                                    Descubre nuestros planes personalizados, diseñados exclusivamente para los <span className='fw-bold fst-italic fs-4'>tuisters</span>
                                </p>
                            </div>
                            <Row className='row-cols-1 row-cols-md-2 row-cols-lg-5'>
                                <JackInTheBox>
                                    <Col className="text-center">
                                        <img
                                            src="/img/express.png"
                                            alt="express"
                                            className="w-75"
                                            loading="lazy"
                                        />
                                        <Button 
                                            className='paq-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill mt-4 mb-4 border-light fs-5'
                                            onClick={() => {
                                                navigate("/paquetes/tuisty-express");
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            Ver Paquetes
                                        </Button>
                                    </Col>
                                </JackInTheBox>
                                <JackInTheBox delay={500}>
                                    <Col className="text-center">
                                        <img
                                            src="/img/mensuales.png"
                                            alt="mensaules"
                                            className="w-75"
                                            loading="lazy"
                                        />
                                        <Button 
                                            className='paq-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill mt-4 mb-4 border-light fs-5'
                                            onClick={() => {
                                                navigate("/paquetes/tuisty-mensual");
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            Ver Paquetes
                                        </Button>
                                    </Col>
                                </JackInTheBox>
                                <JackInTheBox delay={1000}>
                                    <Col className="text-center">
                                        <img
                                            src="/img/trimestrales.png"
                                            alt="trimestrales"
                                            className="w-75"
                                            loading="lazy"
                                        />
                                        <Button 
                                            className='paq-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill mt-4 mb-4 border-light fs-5'
                                            onClick={() => {
                                                navigate("/paquetes/tuisty-trimestral");
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            Ver Paquetes
                                        </Button>
                                    </Col>
                                </JackInTheBox>
                                <JackInTheBox delay={1500}>
                                    <Col className="text-center">
                                        <img
                                            src="/img/semestrales.png"
                                            alt="semestrales"
                                            className="w-75"
                                            loading="lazy"
                                        />
                                        <Button 
                                            className='paq-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill mt-4 mb-4 border-light fs-5'
                                            onClick={() => {
                                                navigate("/paquetes/tuisty-semestral");
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            Ver Paquetes
                                        </Button>
                                    </Col>
                                </JackInTheBox>
                                <JackInTheBox delay={2000}>
                                    <Col className="text-center">
                                        <img
                                            src="/img/anuales.png"
                                            alt="anuales"
                                            className="w-75"
                                            loading="lazy"
                                        />
                                        <Button 
                                            className='paq-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill mt-4 mb-4 border-light fs-5'
                                            onClick={() => {
                                                navigate("/paquetes/tuisty-anual");
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            Ver Paquetes
                                        </Button>
                                    </Col>
                                </JackInTheBox>
                            </Row>
                            <div className="p-3 pb-md-4 mx-auto text-center">
                                <div className="mb-3"> 
                                    <p className='fs-5 text-white fw-bold'>
                                    Para más información sobre nuestras tarifas, puedes consultar el Buscador de tarifas del Registro Público de
                                    Telecomunicaciones <a href='https://tarifas.ift.org.mx/ift_visor/' target='_blank' className="fs-6 fw-bold text-decoration-none link-ift">https://tarifas.ift.org.mx/ift_visor/</a>
                                    </p>
                                </div>
                                <div className="mb-1">
                                    <Link to="/terminos-y-condiciones" className="fs-6 text-white fw-bold text-decoration-none link-btn">Conoce Términos y condiciones</Link>
                                </div>
                                <div className="mb-1">
                                    <Link to="/politica-uso-justo" className="fs-6 text-white fw-bold text-decoration-none link-btn" target="_blank">Políticas de uso justo</Link>
                                </div>
                            </div>
                        </Container>
                    </section>
                    <ShippingTerms/>
                    <AppStoreTuis/>
                </main>
                <FloatingWhatsAppButton/>
                <FooterComponent/>
            </>
        )}
        </>
    );
}

export default Paquetes