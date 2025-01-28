import './Planes-Section.css'
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faWhatsapp, faInstagram, faSnapchat, faTelegram, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

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
    const rowColsClass = plans.length === 2 
        ? "row-cols-1 row-cols-md-2 justify-content-md-center row-cols-lg-4"
        : "row-cols-1 row-cols-md-2 row-cols-lg-4";
    const navigate = useNavigate();
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
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
                                                {plan.price}
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
                                                    <img src="/img/canada.png" alt="can-flag" className='w-25 mx-1'/>
                                                    <img src="/img/estados-unidos.png" alt="usa-flag" className='w-25 mx-1'/>
                                                    <img src="/img/mexico.png" alt="mx-flag" className='w-25 mx-1'/>
                                                </div>
                                            </div>
                                            <Button 
                                                className="plan-button text-uppercase fw-bold fst-italic p-1 px-4 rounded-pill border-light fs-4 mb-3"
                                                onClick={() => {
                                                    //Este botón redirecciona al carrito de compras
                                                }}
                                                >
                                                Comprar
                                            </Button>
                                            <Accordion defaultActiveKey={null} flush>
                                                <Accordion.Item eventKey='0'>
                                                    <Accordion.Header>
                                                        <h4 className="fw-bold fs-6 text-center">
                                                            Mostrar Detalles
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
                                                        <div className='border-tuisty-in border-2 border-bottom pt-4 pb-3'>
                                                            <h4 className="fw-bold fs-6 text-uppercase folio-title">
                                                                Folio: <span className='text-secondary fw-bold'>{plan.iftfolio}</span>
                                                            </h4>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Fade>
                    ))}
                </Row>
                <div className="p-3 pb-md-4 mx-auto text-center">
                    <div className="mb-3"> 
                        <p className='fs-5 text-white fw-bold'>
                        Para más información sobre nuestras tarifas, puedes consultar el Buscador de tarifas del Registro Público de
                        Telecomunicaciones <a href='https://tarifas.ift.org.mx/ift_visor/' target='_blank' className="fs-6 fw-bold text-decoration-none link-ift">https://tarifas.ift.org.mx/ift_visor/</a>
                        </p>
                    </div>
                    <div className="mb-1">
                        <Link to="/terminos-y-condiciones" className="fs-6 text-white fw-bold text-decoration-none link-btn" target="_blank">Conoce Términos y condiciones</Link>
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