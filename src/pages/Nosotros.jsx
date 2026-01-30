
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { useEffect, useState, useRef } from "react";
import "./Nosotros.css"
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Fade, Slide } from 'react-awesome-reveal';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import FloatingWhatsAppButton from '../components/WhatsApp-Button';
import ShippingTerms from '../components/Shipping-Terms';
import AppStoreTuis from '../components/AppStoreTuis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const reviewsData = [
    {
        id: 1,
        img: "https://temalcode-agency-portfolio.netlify.app/images/review1.png",
        title: "“Excellent Team with Creative Mindset”",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet, pulvinar nunc fringilla lectus.",
            
        ],
        author: "CEO of SomeCompany"
    },
    {
        id: 2,
        img: "https://temalcode-agency-portfolio.netlify.app/images/review2.png",
        title: "“Excellent Team with Creative Mindset”",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet, pulvinar nunc fringilla lectus.",
            
        ],
        author: "CEO of SomeCompany"
    },
    {
        id: 3,
        img: "https://temalcode-agency-portfolio.netlify.app/images/review3.png",
        title: "“Excellent Team with Creative Mindset”",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet, pulvinar nunc fringilla lectus.",
            
        ],
        author: "CEO of SomeCompany"
    },
    {
        id: 4,
        img: "https://temalcode-agency-portfolio.netlify.app/images/review1.png",
        title: "“Excellent Team with Creative Mindset”",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet, pulvinar nunc fringilla lectus.",
            
        ],
        author: "CEO of SomeCompany"
    },
    {
        id: 5,
        img: "https://temalcode-agency-portfolio.netlify.app/images/review4.png",
        title: "“Excellent Team with Creative Mindset”",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet, pulvinar nunc fringilla lectus.",
            
        ],
        author: "CEO of SomeCompany"
    },
    {
        id: 6,
        img: "https://temalcode-agency-portfolio.netlify.app/images/review2.png",
        title: "“Excellent Team with Creative Mindset”",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet, pulvinar nunc fringilla lectus.",
            
        ],
        author: "CEO of SomeCompany"
    },
];

// Duplicamos la data para el efecto infinito
const extendedReviews = [...reviewsData, ...reviewsData];
const singleSetWidth = reviewsData.length * (320 + 24); // 320px card + 24px gap (gap-4)

export default function Nosotros () {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const trackRefV3 = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 344; // Ancho tarjeta (320) + gap (24)

            if (direction === 'left') {
                // Si estamos al principio (o muy cerca), saltamos invisiblemente al final del primer set
                if (current.scrollLeft <= 0) {
                    current.scrollLeft = singleSetWidth;
                }
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                // Si hemos pasado el primer set completo, saltamos invisiblemente al inicio
                if (current.scrollLeft >= singleSetWidth) {
                    current.scrollLeft = 0;
                }
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            if (current.scrollLeft >= singleSetWidth) {
                current.scrollLeft -= singleSetWidth;
            }
        }
    };

    // Lógica para calcular la duración de la animación de la v3
    useEffect(() => {
        const calculateDuration = () => {
            if (trackRefV3.current) {
                const speed = 50; // Pixels por segundo
                // Dividimos entre 2 porque duplicamos la data para el loop
                const width = trackRefV3.current.scrollWidth / 2;
                const duration = width / speed;
                trackRefV3.current.style.setProperty('--duration', `${duration}s`);
            }
        };

        // Pequeño timeout para asegurar que el DOM esté listo
        const timeoutId = setTimeout(calculateDuration, 500);
        window.addEventListener('resize', calculateDuration);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', calculateDuration);
        };
    }, [loading]);

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
                                                Mantente conectado en México, así como en EE. UU. y Canadá, con 
                                                nuestra cobertura nacional y servicio de roaming internacional.
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
                                                Sabemos lo importante que es estar conectado, incluso en los lugares más remotos. Por eso te
                                                ofrecemos esta nueva opción, con cobertura que llega a pueblos y rancherías donde el internet 
                                                por cable no tiene alcance.
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
                                            <h4 className='fw-bold fs-5'>Asistencia Técnica</h4>
                                            <p className='mb-2'>
                                                Comunicate vía WhatsApp, en donde recibirás la ayuda que
                                                necesites en cualquier
                                                momento.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Slide>
                        </Container>
                    </section>
                    {/* <section className='pt-5 pb-5 '>
                        <Container fluid >
                            <div className="p-3 pb-md-4 mx-auto text-center">
                                <h1 className="display-6 fw-bold title-services text-uppercase">lo que dicen<br/> <span className=' display-1 fw-bold'>Nuestros Clientes v1</span></h1>
                            </div>
                            <div className="reviews-container overflow-hidden mt-4">
                                <div className="reviews-row row-first d-flex gap-4 mb-4">
                                    {reviewsData.slice(0, 3).map((review) => (
                                        <div key={review.id} className="reviews-card shadow-sm rounded-3 overflow-hidden">
                                            <img className="card-img-review object-fit-cover" src={review.img} alt="review" />
                                            <div className="card-text-review bg-white p-4 p-md-5">
                                                <div className="card-title-review">
                                                    <p className="fw-bold fs-4 lh-sm">{review.title}</p>
                                                </div>
                                                <div className="card-para-review my-3 text-muted">
                                                    {review.paragraphs.map((para, index) => (
                                                        <p key={index}>{para}</p>
                                                    ))}
                                                </div>
                                                <div className="card-author-review d-flex align-items-center gap-2 mt-3">
                                                    <svg width="20" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.526123 1.13867H8.25949" stroke="black" strokeWidth="0.822209" />
                                                    </svg>
                                                    <p className="m-0 fw-bold small">{review.author}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="reviews-row row-second d-flex gap-4">
                                    {reviewsData.slice(3, 6).map((review) => (
                                        <div key={review.id} className="reviews-card shadow-sm rounded-3 overflow-hidden">
                                            <div className="card-img-review">
                                                <img className="object-fit-cover w-100 h-100" src={review.img} alt="review" />
                                            </div>
                                            <div className="card-text-review bg-white p-4 p-md-5">
                                                <div className="card-title-review">
                                                    <p className="fw-bold fs-4 lh-sm">{review.title}</p>
                                                </div>
                                                <div className="card-para-review my-3 text-muted">
                                                    {review.paragraphs.map((para, index) => (
                                                        <p key={index}>{para}</p>
                                                    ))}
                                                </div>
                                                <div className="card-author-review d-flex align-items-center gap-2 mt-3">
                                                    <svg width="20" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.526123 1.13867H8.25949" stroke="black" strokeWidth="0.822209" />
                                                    </svg>
                                                    <p className="m-0 fw-bold small">{review.author}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Container>
                    </section> */}
                    {/* <section className='pt-5 pb-5 '>
                        <Container >
                            <div className="p-3 pb-md-4 mx-auto text-center">
                                <h1 className="display-6 fw-bold title-services text-uppercase">lo que dicen<br/> <span className=' display-1 fw-bold'>Nuestros Clientes v2</span></h1>
                            </div>
                            <div className="position-relative px-4 mt-4">
                                <div 
                                    className="reviews-scroll-container d-flex gap-4 overflow-auto py-4 px-2" 
                                    ref={scrollRef}
                                    onScroll={handleScroll}
                                >
                                    {extendedReviews.map((review, index) => (
                                        <div key={`${review.id}-${index}`} className="reviews-card-v2 shadow-sm rounded-3 overflow-hidden flex-shrink-0">
                                            <div className="card-img-review-v2">
                                                <img className="object-fit-cover w-100 h-100" src={review.img} alt="review" />
                                            </div>
                                            <div className="card-text-review bg-white p-4 p-md-5">
                                                <div className="card-title-review">
                                                    <p className=" fs-4 lh-sm">{review.title}</p>
                                                </div>
                                                
                                                <div className="card-author-review d-flex align-items-center gap-2 mt-3">
                                                    <svg width="20" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.526123 1.13867H8.25949" stroke="black" strokeWidth="0.822209" />
                                                    </svg>
                                                    <p className="m-0 fw-bold small">{review.author}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="scroll-btn left d-none d-md-flex" onClick={() => scroll('left')}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button className="scroll-btn right d-none d-md-flex" onClick={() => scroll('right')}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </Container>
                    </section> */}
                    {/* <section className='pt-5 pb-5 reviews-v3-section'>
                        <Container fluid>
                            <div className="p-3 pb-md-4 mx-auto text-center">
                                <h1 className="display-6 fw-bold title-services text-uppercase">lo que dicen<br/> <span className=' display-1 fw-bold'>Nuestros Clientes v3</span></h1>
                            </div>
                            <div className="marquee-v3">
                                <div className="track-v3" ref={trackRefV3}>
                                   
                                    {[...reviewsData, ...reviewsData].map((review, index) => (
                                        <article className="card-v3" key={`v3-${review.id}-${index}`}>
                                            <div className="logo-v3" aria-hidden="true">
                                                <svg viewBox="0 0 64 64" width="44" height="44" fill="currentColor">
                                                    <path d="M56 16c-9 8-20 10-32 6-6-2-11-1-16 3 3-10 10-16 20-18 8-2 16 1 22 9zM8 36c7-6 16-8 26-5 7 2 13 1 18-3-3 9-10 15-19 17-9 2-17-1-25-9z"/>
                                                </svg>
                                            </div>
                                            <div className="stat-v3">
                                                
                                                <p className="desc-v3">{review.title}</p>
                                            </div>
                                            <div className="author-v3">
                                                <div className="who-v3">
                                                    <div className="name-v3">{review.author}</div>
                                                    <div className="title-v3">Cliente Tuis</div>
                                                </div>
                                                <div className="avatar-v3">
                                                    <img src={review.img} alt="Avatar"/>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </Container>
                    </section> */}
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