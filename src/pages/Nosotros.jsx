
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { useEffect, useState } from "react";
import "./Nosotros.css"
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Fade, Slide } from 'react-awesome-reveal';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import FloatingWhatsAppButton from '../components/WhatsApp-Button';
import ShippingTerms from '../components/Shipping-Terms';
import AppStoreTuis from '../components/AppStoreTuis';

export default function Nosotros () {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
                <main>
                    <section className='pt-5 pb-5'>
                        <Container className='my-5 mx-auto'>
                            <Row className='row-cols-1 row-cols-lg-2 gy-4'>
                                <Fade>
                                    <Col className='text-center'>
                                        <img
                                            src="img/tuis-nosotros.png"
                                            alt="basicos"
                                            className="img-fluid w-75"
                                            loading="lazy"
                                        />
                                    </Col>
                                </Fade>
                                <Col>
                                    <h2 className='display-3 fw-bold nosotros-title pt-5 mt-5'>¿Qué es TUIS?</h2>
                                    <p className="pt-2 fs-5 fw-bold nosotros-paragraph">
                                        Bienvenidos a Tuis, tu nueva compañía de telefonía móvil originaria 
                                        en Tampico, Tamaulipas. En Tuis, nos enorgullece ofrecer una experiencia 
                                        única en conectividad para los usuarios en todo México.
                                    </p>
                                </Col>
                                <Col className='position-relative'>
                                    <div className='position-absolute w-100 h-100 nosotros-mission-shadow'></div>
                                    <div className='p-4 position-relative nosotros-mission'>
                                    <h2 className="fw-bold">Misión</h2>
                                        <p>
                                            Conectar a las personas, facilitar su vida cotidiana y mantenerlas en contacto con lo que más les importa. 
                                            En Tuis, creemos que la conectividad debe ser accesible para todos, sin importar dónde te encuentres. 
                                            Desde llamadas claras hasta una cobertura confiable en todo el país, trabajamos incansablemente para 
                                            asegurar que disfrutes de la mejor experiencia posible.
                                        </p>
                                    </div>
                                </Col>
                                <Col className='position-relative'>
                                    <div className='position-absolute w-100 h-100 nosotros-history-shadow'></div>
                                    <div className='p-4 position-relative nosotros-history'>
                                    <h2 className="fw-bold">Historia</h2>
                                        <p>
                                            Nacidos en el corazón de Tampico, Tuis surge con la misión de transformar la manera en que te conectas 
                                            con el mundo. Con un fuerte compromiso hacia la calidad del servicio y la innovación tecnológica, nos 
                                            dedicamos a proporcionar soluciones de comunicación que se adaptan a las necesidades modernas de una 
                                            sociedad siempre conectada.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container className='mb-3 pb-3'>
                        <div className="dotted-line-container">
                            <div className="dotted-line"></div>
                        </div>
                        </Container>
                    </section>
                    <section className='pt-5 pb-5'>
                        <Container>
                            <div className="p-3 pb-md-4 mx-auto text-center">
                                <h1 className="display-6 fw-bold title-services text-uppercase">Nuestros<br/> <span className=' display-1 fw-bold'>Servicios</span></h1>
                            </div>
                            <Slide direction='down'>
                                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4'>
                                    <Col className="text-center pt-5 pt-md-1 pt-lg-0">
                                        <img
                                            src="img/precios.png"
                                            alt="precios"
                                            className="w-75"
                                            loading="lazy"
                                        />
                                        <div className="pt-3 text-start">
                                            <h4 className='fw-bold fs-5'>Paquetes de Datos Accesibles</h4>
                                            <p className='mb-2'>
                                                Ofrecemos planes de datos con muchos GB para que puedas navegar, trabajar y
                                                navegar y disfrutar de tus contenidos sin preocupaciones.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col className="text-center pt-5 pt-md-1 pt-lg-0">
                                        <img
                                            src="img/linea-mundial.png"
                                            alt="linea-mundial"
                                            className="w-75"
                                            loading="lazy"
                                        />
                                        <div className="pt-3 text-start">
                                            <h4 className='fw-bold fs-5'>Cobertura Nacional e Internacional</h4>
                                            <p className='mb-2'>
                                                Mantente conectado en cualquier lugar de México, así como EE. UU y Canadá.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col className="text-center pt-5 pt-md-1 pt-lg-0">
                                        <img
                                            src="img/telefonia-movil-rural.png"
                                            alt="telefonia-movil-rural"
                                            className="w-75"
                                            loading="lazy"
                                        />
                                        <div className="pt-3 text-start">
                                            <h4 className='fw-bold fs-5'>Conectividad en Zonas Rurales</h4>
                                            <p className='mb-2'>
                                                Sabemos lo importante que es estar conectado, incluso en los lugares más remotos. 
                                                Por eso, garantizamos una cobertura confiable en pueblos y rancherías donde el 
                                                acceso a internet cableado no llega.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col className="text-center pt-5 pt-md-1 pt-lg-0">
                                        <img
                                            src="img/cropped-esencial-idea.png"
                                            alt="semestrales"
                                            className="w-75"
                                            loading="lazy"
                                        />
                                        <div className="pt-3 text-start">
                                            <h4 className='fw-bold fs-5'>Paquetes de Datos Accesibles</h4>
                                            <p className='mb-2'>
                                                Ofrecemos planes de datos con muchos GB para que puedas navegar, trabajar y
                                                navegar y disfrutar de tus contenidos sin preocupaciones.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Slide>
                        </Container>
                    </section>
                </main>
                <section className='pt-5 pb-3 section-tuis'>
                    <Container className='px-4 py-5'>
                        <Row className='flex-lg-row-reverse align-items-center g-5 py-5'>
                            <Col xs={10} sm={8} lg={6}>
                                <img 
                                    src="/img/dale-tuis.png" 
                                    alt="dale-tuis" 
                                    className='d-block mx-lg-auto img-fluid' 
                                    width="80%"
                                    loading="lazy"
                                />
                            </Col>
                            <Col lg={6}>
                                <h1 className="display-5 fw-bold text-white lh-1 mb-3">¡Dale un giro a tu señal!</h1>
                                <p className="lead text-white">
                                    Descubre cómo Tuis puede transformar tu manera de comunicarte. Únete a nosotros 
                                    y sé parte de una comunidad que valora la calidad, la accesibilidad y la innovación.
                                </p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="px-4"
                                        onClick={() => {
                                            //navigate("/acceder")
                                            //window.scrollTo(0, 0);
                                        }}
                                    >
                                        Dale Tuis
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <ShippingTerms/>
                <AppStoreTuis/>
                <FloatingWhatsAppButton/>
                <FooterComponent/>
            </>
            )}
        </>
    );
}