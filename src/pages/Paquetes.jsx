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
                        </div>
                    </Container>
                </section>
                </Fade>
                <main>
                <section>
                    <Container className='px-4 py-5'>
                        <Row className='row-cols-1 row-cols-md-2 algins-items-md-center g-5 py-5'>
                            <Col className=' d-flex flex-column algins-items-start gap-2'>
                                <h2 className='display-5 fw-bold hero-tuis-subtitle-2'>Conéctate a tu manera: ¿SIM o eSIM?</h2>
                                <p className='text-dark fs-5'>
                                    En Tuis te damos la libertad de elegir cómo conectarte: con una SIM física o una eSIM
                                    digital. Ambas te ofrecen llamadas, mensajes y datos en nuestra red; la única diferencia
                                    es el formato del chip.
                                </p>
                            </Col>
                            <Col>
                                <p className='text-dark fs-3 fw-bold'>
                                    ¿Cuál es la diferencia?
                                </p>
                                <Row className='row g-4'>
                                    <Col xs="12" md="6" className="text-center">
                                        <img
                                            src="/img/tarjeta-sim.png"
                                            alt="mapa-mexico"
                                            className="w-50"
                                            loading="lazy"
                                        />
                                        <p className="pt-3 fs-6 fw-bold">
                                            La SIM es la tarjeta plástica tradicional 
                                            que se inserta en tu celular para 
                                            acceder a todos nuestros servicios.
                                        </p>
                                    </Col>
                                    <Col xs="12" md="6" className="text-center">
                                        <img
                                            src="/img/e-sim.png"
                                            alt="precios"
                                            className="w-50"
                                            loading="lazy"
                                        />
                                        <p className="pt-3 fs-6 fw-bold">
                                            Mientras que la eSIM, es un chip virtual que se 
                                            activa escaneando un código QR, sin necesidad de 
                                            tarjeta física. 
                                        </p>
                                    </Col>
                                    <div>
                                        <p>La eSIM al ser digital, su envío es tan fácil como hacer clic: te la
                                        enviamos por chat o correo en formato imagen o PDF.</p>
                                    </div>
                                </Row>
                            </Col>
                            <Col md="12" className='d-flex flex-column algins-items-center gap-2'>
                                <h4 className='text-dark fs-5 text-center fw-bold'>
                                    Antes de elegir, verifica la compatibilidad de tu celular:
                                </h4>
                            </Col>
                            <Col xs="12" md="6" className='d-flex flex-column algins-items-center gap-2'>
                                <p className='fs-5 text-center hero-tuis-subtitle fw-bold'>
                                    ¿Tu celular tiene ranura para SIM? <br />
                                    <span className='text-dark fw-normal'>
                                        La mayoría de los equipos la incluyen. Si es tu caso, puedes usar una SIM física Tuis sin
                                        problema.
                                    </span>
                                </p>
                            </Col>
                            <Col xs="12" md="6" className='d-flex flex-column algins-items-center'>
                                <p className='fs-5 text-center hero-tuis-subtitle fw-bold'>
                                    ¿Tu equipo soporta eSIM? <br />
                                    <span className='text-dark fw-normal'>
                                        Consulta si tu celular es compatible aquí:
                                    </span>
                                </p>
                                <div className="pb-4 text-center">
                                    <Button 
                                        className="buy-button border border-3 fs-5 text-uppercase fw-bold fst-italic p-2 rounded-pill"
                                        href='https://wa.link/8ixi0l' target='_blank'
                                    >
                                        Ver compatibilidad
                                    </Button>
                                </div>
                            </Col>
                            <Col md="12"className='d-flex flex-column algins-items-center gap-2'>
                                <h4 className='text-dark fs-5 text-center fw-bold'>
                                    Tips de instalación
                                </h4>
                            </Col>
                            <Col xs="12" md="6" className='d-flex flex-column algins-items-center'>
                                <div className='row g-1'>
                                    <Col xs="12" md="6">
                                        <p className='fs-5 text-center hero-tuis-subtitle fw-bold'>
                                            SIM Física<br />
                                            <div className='text-dark fw-normal text-start fs-6'>
                                                <ul>
                                                    <li>Apaga tu celular antes de insertar la SIM.</li>
                                                    <li>Usa la herramienta para abrir la bandeja.</li>
                                                    <li>Coloca la SIM correctamente y vuelve a encender tu equipo.</li>
                                                </ul>
                                            </div>
                                        </p>
                                    </Col>
                                    <Col xs="12" md="6" className='mx-auto'>
                                        <img
                                            src="/img/sim-card.png"
                                            alt="mapa-mexico"
                                            className="w-50 img-fluid mx-auto"
                                            loading="lazy"
                                        />
                                    </Col>
                                </div>
                            </Col>
                            <Col xs="12" md="6" className='d-flex flex-column algins-items-center'>
                                <div className='row g-1'>
                                    <Col xs="12" md="6">
                                        <p className='fs-5 text-center hero-tuis-subtitle fw-bold'>
                                            eSIM Digital<br />
                                            <div className='text-dark fw-normal text-start fs-6'>
                                                <ul>
                                                    <li>Asegúrate de que tu dispositivo sea compatible.</li>
                                                    <li>Conéctate a una red Wi-Fi.</li>
                                                    <li>
                                                        Escanea el código QR desde:
                                                        Ajustes &gt; Conexiones &gt; Administrador de SIM &gt; Añadir eSIM &gt; Escanea el código
                                                        QR.
                                                    </li>
                                                </ul>
                                            </div>
                                        </p>
                                    </Col>
                                    <Col xs="12" md="6" className='mx-auto'>
                                        <img
                                            src="/img/esim.png"
                                            alt="mapa-mexico"
                                            className="w-50 img-fluid mx-auto"
                                            loading="lazy"
                                        />
                                    </Col>
                                </div>
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