import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { useState, useEffect, useMemo } from 'react';
import { Container, Collapse } from 'react-bootstrap';
import './FAQ.css';
import { Fade, Slide } from 'react-awesome-reveal';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import FloatingWhatsAppButton from '../components/WhatsApp-Button';
import ShippingTerms from '../components/Shipping-Terms';
import AppStoreTuis from '../components/AppStoreTuis';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './FAQ.css';


// Datos extraídos del HTML original
const faqData = [
    {
        id: 'activacion',
        title: 'Activacion y Registro',
        items: [
            {
                id: 1,
                question: '¿Cómo activo mi línea TUIS?',
                answer: 'Inserta tu SIM o E-SIM en tu equipo, enciéndelo y sigue las instrucciones que recibirás por mensaje. Una vez completado el proceso, tu línea quedará activa.'
            },
            {
                id: 2,
                question: '¿Si ya soy usuario, dónde puedo registrar mi línea?',
                answer: (
                    <>
                        Si ya eres usuario TUIS, puedes registrar tu línea ingresando al siguiente enlace y siguiendo los pasos indicados: <br />
                        <a href="https://rnu.altanredes.com/addomv/vinculatulinea" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#6149B7', fontWeight: 'bold' }}>     Registra tu linea aqui</a> <br /> <br />
                        Si tienes algún inconveniente durante el registro o necesitas apoyo, <a href="https://wa.me/525595216000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#6149B7', fontWeight: 'bold' }}>contáctanos aqui.</a>
                    </>
                )
            },
            {
                id: 3,
                question: '📲 ¿Cómo saber si mi celular tiene eSIM?',
                answer: (
                    <>
                        La eSIM es una SIM digital que no necesita chip físico. <br /> Para saber si tu celular es compatible, revisa en <span style={{ fontWeight: 'bold'}}> Ajustes</span> si aparece la opción <span style={{ fontWeight: 'bold'}}> “Agregar  eSIM” </span> o <span style={{fontWeight: 'bold'}}> “SIM digital”. </span> <br /> <br />Si no estás seguro, nosotros te ayudamos a 
                        <a href="https://wa.me/525595216000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#6149B7', fontWeight: 'bold' }}> verificarlo</a>
                    </>
                )
            },
            {
                id: 4,
                question: '¿Es necesario registrar la línea provisional?',
                answer: 'Sí, el registro de la línea provisional es importante para evitar incidencias durante la activación o portabilidad.'
            },
            {
                id: 5,
                question: 'No me llegó el mensaje de bienvenida, ¿qué hago?',
                answer:(
                    <>
                        Reinicia tu equipo y verifica que tengas señal. Si el mensaje no llega, contáctanos para apoyarte con el registro manual,
                        <a href="https://wa.me/525595216000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#6149B7', fontWeight: 'bold' }}>  click aquí.</a>
                    </>
                ) 
                
            },
            {
                id: 6,
                question: '¿Cuánto tarda en activarse mi línea?',
                answer: 'La activación puede tardar de unos minutos hasta 24 horas, dependiendo del proceso.'
            },
        ]
    },
    {
        id: 'portabilidad',
        title: 'Portabilidad',
        items: [
            {
                id: 7,
                question: '¿Qué es la Portabilidad?',
                answer: (
                    <>
                        🔄 Es el proceso que te permite cambiarte a Tuis conservando tu mismo número, sin trámites complicados.<br /> 📱 ¡Con nosotros es rápido, gratuito y sin perder tu número!
                        
                    </>
                )
            },
            {
                id: 8,
                question: '¿Cómo hago mi portabilidad a Tuis?',
                answer:  (
                    <>
                        1. Desde tu línea actual, envía un SMS con la palabra NIP al 051️ o llama al mismo número.<br />
                       2. Recibirás un código de 4 dígitos (ese es tu NIP). <br />
                       3. Compártenos tu NIP. <br /><br />🛠️ Nosotros nos encargamos del resto.
                    </>
                )
            },
            {
                id: 9,
                question: '¿Cuánto tarda la portabilidad? *',
                answer: (
                    <>
                        ⏳ La portabilidad tarda de 24 a 48 horas hábiles en completarse.<br />
                        📲 Mientras tanto, podrás usar el chip Tuis con un número temporal, para que no te quedes incomunicado. <br />
                        ✅ El cambio a tu número original se realiza en automático.

                    
                    </>
                )
            },
        ]
    },
    {
        id: 'servicio',
        title: 'Servicio y cobertura',
        items: [
            {
                id: 10,
                question: '📶 ¿Qué hago si no tengo señal o datos?',
                answer:(
                    <>
                        Reinicia tu equipo y verifica la configuración APN. <br /> Si el problema continúa: 
                        <a href="https://wa.me/525595216000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#6149B7', fontWeight: 'bold' }}>  Contáctanos por Whatsapp</a>
                    </>
                )  
            },
            {
                id: 11,
                question: '💳 ¿Dónde puedo hacer mi recarga?',
                answer: (
                    <>
                        Puedes realizar tu recarga desde la <span style={{ fontWeight: 'bold'}}> app móvil TUIS,</span>  ya sea en línea o generando un  <span style={{fontWeight: 'bold'}}> código de barras</span> <br />También puedes acudir a las <span style={{ fontWeight: 'bold'}}> sucursales INBTEL.</span> <br /> <br />
                        <a href=" https://wa.me/525595216000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#6149B7', fontWeight: 'bold' }}>  Contáctanos por Whatsapp</a>
                    </>
                )  
            }
        ]
    },
    {
        id: 'soporte',
        title: 'Soporte',
        items: [
            {
                id: 7,
                question: '📵 Mi línea no tiene servicio, ¿cómo me apoyan?',
                answer:(
                    <>
                        Reinicia tu equipo y verifica que la SIM esté correctamente colocada. Si el problema continúa, nuestro equipo te apoyará para validar tu línea. <br /> <br />
                        <a href=" https://wa.me/525595216000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#6149B7', fontWeight: 'bold' }}>  Contáctanos por Whatsapp</a>
                    </>
                )   
                
            },
            {
                id: 8,
                question: '📞 ¿Cómo contacto a soporte TUIS?',
                answer:(
                    <>
                        Puedes comunicarte con nosotros a través de WhatsApp, donde un asesor te brindará atención personalizada. <br /> <br />
                        <a href=" https://wa.me/525595216000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#6149B7', fontWeight: 'bold' }}>  Contáctanos por Whatsapp</a>
                    </>
                )   
                
            },
             {
                id: 9,
                question: '🔒 ¿Qué hago en caso de robo o extravío de mi equipo o línea?',
                answer:(
                    <>
                        En caso de <span style={{ fontWeight: 'bold'}}> robo o extravío,</span> contáctanos de inmediato para <span style={{ fontWeight: 'bold'}}> bloquear tu línea</span> y evitar el uso no autorizado. <br /> Un asesor te ayudará a proteger tu información y a continuar con el proceso correspondiente. <br /> <br />
                        <a href=" https://wa.me/525595216000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#6149B7', fontWeight: 'bold' }}>  Contáctanos por Whatsapp</a>
                    </>
                )   
                
            },
            {
                id: 10,
                question: '🔄 ¿Cómo recupero mi línea?',
                answer:(
                    <>
                        Si tu línea fue suspendida por <span style={{ fontWeight: 'bold'}}>  robo, extravío o cambio de equipo,</span> contáctanos para ayudarte a  <span style={{ fontWeight: 'bold'}}> reactivarla o reponerla.</span> <br /> Un asesor validará tu información y te indicará los pasos a seguir. <br /> <br />
                        <a href=" https://wa.me/525595216000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#6149B7', fontWeight: 'bold' }}>  Contáctanos por Whatsapp</a>
                    </>
                )   
                
            },
            {
                id: 11,
                question: '❌ ¿Qué hago si quiero cancelar mi servicio?',
                answer:(
                    <>
                        En <span style={{ fontWeight: 'bold'}}>  TUIS</span> nuestros planes  <span style={{ fontWeight: 'bold'}}> no son forzosos</span> <br /> Si deseas cancelar, comunícate con uno de nuestros asesores para solicitar la <span style={{ fontWeight: 'bold'}}> baja del servicio</span>
                        
                    </>
                )   
                
            },
            
        ]
    },
    
];


export default function FAQ() {
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeItem, setActiveItem] = useState(null); // ID del item abierto

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoading(false);
        };
        fetchData();
    }, []);

    // Lógica de filtrado
    const filteredData = useMemo(() => {
        if (activeCategory === 'all') {
            return faqData;
        }
        return faqData.filter(category => category.id === activeCategory);
    }, [activeCategory]);

    const toggleItem = (id) => {
        setActiveItem(activeItem === id ? null : id);
    };

    return (
        <>
            <Loading loading={loading} />
            {!loading && (
                <>
                    <NavbarComponent />
                    <main>
                        <section className="pt-5 pb-5">
                            <Container>
                                <div className="faq-custom-container">
                                    {/* Header Section */}
                                    <div className="faq-header">
                                        <Fade>
                                        <h2 className='display-3 fw-bold text-center'>Preguntas Frecuentes</h2>
                                        <p className='pt-4 fs-5 '>¿Tienes dudas sobre tu línea, activación, portabilidad o recargas?. Aquí encontrarás respuestas rápidas y claras para que sigas conectado sin complicaciones. <br /> <br />En TUIS estamos para ayudarte en cada paso. Si no encuentras lo que buscas, contáctanos y con gusto te apoyamos. </p>
                                        </Fade>
                                        
                                        
                                        
                                        
                                        {/* Category Filter */}
                                        <div className="category-filter">
                                            <button 
                                                className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`} 
                                                onClick={() => setActiveCategory('all')}
                                            >
                                                Todas
                                            </button>
                                            <button 
                                                className={`category-btn ${activeCategory === 'activacion' ? 'active' : ''}`} 
                                                onClick={() => setActiveCategory('activacion')}
                                            >
                                                Activación y registro
                                            </button>
                                            <button 
                                                className={`category-btn ${activeCategory === 'portabilidad' ? 'active' : ''}`} 
                                                onClick={() => setActiveCategory('portabilidad')}
                                            >
                                                🔄 Portabilidad
                                            </button>
                                            <button 
                                                className={`category-btn ${activeCategory === 'servicio' ? 'active' : ''}`} 
                                                onClick={() => setActiveCategory('servicio')}
                                            >
                                                Servicio y cobertura
                                            </button>
                                            <button 
                                                className={`category-btn ${activeCategory === 'soporte' ? 'active' : ''}`} 
                                                onClick={() => setActiveCategory('soporte')}
                                            >
                                                🛠️ Soporte
                                            </button>
                                            
                                        </div>
                                    </div>
                                    
                                    {/* FAQ Content */}
                                    <div className="faq-content">
                                        {filteredData.length > 0 ? (
                                            filteredData.map((category) => (
                                                <div key={category.id} className="faq-category-section">
                                                    <h2 className='fw-bold'>{category.title}</h2>
                                                    {category.items.map((item) => (
                                                        <div 
                                                            key={item.id} 
                                                            className={`faq-item ${activeItem === item.id ? 'active' : ''}`}
                                                        >
                                                            <div 
                                                                className="faq-question" 
                                                                onClick={() => toggleItem(item.id)}
                                                                aria-controls={`faq-collapse-${item.id}`}
                                                                aria-expanded={activeItem === item.id}
                                                            >
                                                                <h3>{item.question}</h3>
                                                                <span className="faq-icon">
                                                                    <FontAwesomeIcon icon={faPlus} />
                                                                </span>
                                                            </div>
                                                            <Collapse in={activeItem === item.id}>
                                                                <div id={`faq-collapse-${item.id}`}>
                                                                    <div className="faq-answer">
                                                                        <p className='pt-2'>{item.answer}</p>
                                                                    </div>
                                                                </div>
                                                            </Collapse>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-center py-5">
                                                <p className="fs-5 text-muted">No se encontraron resultados.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
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
