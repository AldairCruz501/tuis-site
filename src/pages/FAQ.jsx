import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { useState, useEffect } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './FAQ.css';
import { Fade, Slide } from 'react-awesome-reveal';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import FloatingWhatsAppButton from '../components/WhatsApp-Button';
import ShippingTerms from '../components/Shipping-Terms';
import AppStoreTuis from '../components/AppStoreTuis';


export default function FAQ() {
    // Estado para controlar la pantalla de carga 
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Efecto para simular la carga 
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
            {/* Renderizado condicional (similar a v-if) */}
            {!loading && (
                <>
                    <NavbarComponent />
                    <main>
                        <section className="pt-5 pb-5">
                            <Container className="my-5">
                                <h1 className="text-center mb-5 display-4 fw-bold faq-title">Preguntas Frecuentes</h1>
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>¿Cómo puedo contratar un plan?</Accordion.Header>
                                        <Accordion.Body>
                                            Puedes contratar cualquiera de nuestros planes a través de la sección de Paquetes en nuestro sitio web o descargando nuestra App Tuis.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>¿Dónde puedo consultar mi saldo?</Accordion.Header>
                                        <Accordion.Body>
                                            Puedes consultar tu saldo enviando la palabra SALDO al 555 o desde nuestra aplicación móvil.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>¿Tienen cobertura en mi ciudad?</Accordion.Header>
                                        <Accordion.Body>
                                            Contamos con cobertura nacional. Puedes verificar el mapa detallado en nuestra sección de Cobertura.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Container>
                        </section>
                        <ShippingTerms/>
                        <AppStoreTuis />
                    </main>
                    
                    <FloatingWhatsAppButton />
                    <FooterComponent />
                </>
            )}
        </>
    );
}
