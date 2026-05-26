import React from 'react';
import './Vinculacion-Linea.css';
import './FAQ.css';
import { useEffect, useState } from "react";
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';

import { Container, Carousel, Button, Row, Col, Collapse } from 'react-bootstrap'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faAngleDoubleDown, faExclamationTriangle, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useNavigate, Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import Loading from '../components/Loading';

import FloatingWhatsAppButton from '../components/WhatsApp-Button';
import AppStoreTuis from '../components/AppStoreTuis';


const misPreguntasVinculacion = [
    {
        id: 1,
        question: '¿Cuántas veces puedo intentar registrar mi línea?',
        answer: (
                    <>
                    Por disposición oficial, podrás realizar 3 intentos en el siguiente link: <br /> 
                    <a href="https://rnu.altanredes.com/addomv/vinculatulinea" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 'bold', wordBreak: 'break-all' }}>👉 https://rnu.altanredes.com/altan/vinculatulinea</a> <br />
                    Si necesitas ayuda, contáctanos por WhatsApp.
                    </>
                )
    },
    {
        id: 2,
        question: '¿Qué pasa si no realizo la vinculación a tiempo?',
        answer: 'Conforme a los Lineamientos, la vinculación inicia el 9 de enero de 2026. Si no realizas la vinculación, tu línea podrá ser deshabilitada a partir del 1 de julio de 2026.'
    },
    {
        id: 3,
        question: '¿La vinculación tiene costo?',
        answer: (
                    <>
                    No. La vinculación, consulta y desvinculación de líneas no tiene ningún costo para nuestros usuarios. <br /> <br />
                    En caso de solicitar la desvinculación de una línea, será necesario cumplir con los mismos requisitos y validaciones utilizados durante el procesos de vinculación. <br /><br />
                    Consulta tus líneas vinculadas aqui: <br />
                    <a href="https://rnu.altanredes.com/consulta" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 'bold', wordBreak: 'break-all' }}>👉 https://rnu.altanredes.com/consulta</a> <br />
                    Si necesitas apoyo para el proceso de desvinculación, contáctanos por WhatsApp.
                    </>
                )
    },
    // {
    //     id: 4,
    //     question: 'Escribe aquí tu cuarta pregunta',
    //     answer: 'Escribe aquí la respuesta a tu cuarta pregunta.'
    // }
];


const misPreguntasVinculacionDos = [
    {
        id: 5,
        question: '¿Debo volver a vincular mi línea si hice portabilidad?',
        answer: (
                    <>
                  Si. <br /> Por disposición oficial, cuando realizas una portabilidad es necesario vincular tu línea con tu nuevo operador, incluiso si ya la habías vinculado anteriormente. 
                  </>
                )
    },
    {
        id: 6,
        question: '¿Cómo funciona la vinculacíon para menores de edad?',
        answer: (
                    <>
                  En el caso de menores de edad, la vinculación la debe realizar el padre, madre o tutor como  <span style={{ fontWeight: 'bold' }}>titular responsable</span> de la línea. <br />Una misma persona puede vincular <span style={{ fontWeight: 'bold' }}>hasta 10 líneas a su nombre</span>, por ejemplo, para hijos, adultos mayores u otros familiares.
                  </>
                )
    }
];

function VinculaLinea() {
    const [loading, setLoading] = useState(true);
    const [activeItem, setActiveItem] = useState(null);

    const toggleItem = (id) => {
        setActiveItem(activeItem === id ? null : id);
    };

        useEffect(() =>{
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
                    <NavbarComponent />
                      <main>
                        <section>
                          <div className="tuisty-container-white p-4">
                            <Container className="">
                              {/* Header */}
                              <Row>
                                <Col lg={6}>
                                  <div className="vinc-header">
                                    <h2 className="display-3 fw-bold">Vincula tu<br></br>línea{" "}
                                    <img
                                      src="img/Tuis-logotipo.png"
                                      className=""
                                      alt="tuis-log"
                                      loading="lazy"
                                    />
                                    </h2>
                                    <p className="fs-5 pt-2 ">Realiza la vinculación de tu línea para mantener tu servicio activo y disfrutar de todos los beneficios.</p>
                                  </div>

                                  <div className="vinc-buttons mx-1 mx-md-4 d-grid gap-3">
                                    <Button
                                      className="buy-button border border-3 fs-5 text-uppercase fw-bold fst-italic p-3 rounded-pill"
                                      href="https://rnu.altanredes.com/addomv/vinculatulinea" target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Vincular mi línea
                                    </Button>
                                    <Button
                                      className="buy-button-2  border border-3 fs-5 text-uppercase fw-bold fst-italic p-3 rounded-pill"
                                      href="https://rnu.altanredes.com/consulta" target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Consultar líneas vinculadas
                                    </Button>
                                  </div>
                                </Col>
                                <Col lg={6} className="mt-3 mt-lg-0" >
                                  <Slide direction="right">
                                    <img
                                      src="img/telefono-vinculacion.png"
                                      alt="Telefono-Vinculacion"
                                      className="vinc-header-img img-fluid pt-3 pt-md-0 pt-lg-5"
                                      loading="lazy"
                                    />
                                  </Slide>
                                </Col>


                              </Row>

                              {/* Que es la vinculación */}
                              <Row className="mt-lg-5 pt-lg-5">
                                <Col lg={12} className="vinc-content d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 gap-4 gap-md-5 text-center text-md-start">
                                  
                                    <img
                                      src="img/ICONO-1.png"
                                      alt="ICONO-1"
                                      className="vinc-content-img  img-fluid"
                                    />

                                    <div>
                                      <h3 className="fs-3 fw-bold pt-3">¿Qué es la vinculación?</h3>
                                      <p className=" pt-2">La vinculación es el proceso para registrar tu línea móvil con tus datos mediante una identificación oficial, como parte de una disposición aplicable a todas las compañías telefónicas.</p>
                                    </div>
                                  
                                </Col>
                              </Row>

                              {/* Sigue estos pasos */}
                              <Row className="pasos-container mt-5 mt-lg-5 pt-lg-5">
                                <div className="p-3 pb-md-4 mx-auto text-center">
                                  <h1 className="fs-2 fw-bold pt-2 pb-2 pt-md-5 pb-md-5">Sigue estos <span className="tuisty-title">pasos</span> para realizar tu <span className="tuisty-title">registro</span></h1>
                                </div>

                                <Slide direction='down'>
                                  <Row className="justify-content-center">
                                    <Col xs={12} md={6} lg={2} className="text-center pt-5 pt-md-4 pt-lg-0">
                                      
                                      <div className="pasos-number d-flex justify-content-center align-items-center rounded-circle mx-auto ">
                                        1
                                      </div>

                                      <img
                                        src="/img/ICONO-2.png"
                                        alt="ICONO-2"
                                        className="pasos-img img-fluid"
                                      >
                                      </img>
                                      
                                      <h4 className=" fs-5 fw-bold mt-3 mt-md-3">Ingresa al portal de vinculación</h4>
                                      
                                    
                                    </Col>

                                    {/* --- Línea separadora 1 --- */}
                                    <Col lg={1} className="d-none d-lg-flex align-items-center">
                                      <div className="w-100" style={{ borderTop: '3px dashed #6149B7' }}></div>
                                    </Col>

                                    <Col xs={12} md={6} lg={2} className="text-center pt-5 pt-md-4 pt-lg-0">
                                      
                                      <div className="pasos-number d-flex justify-content-center align-items-center rounded-circle mx-auto ">
                                        2
                                      </div>

                                      <img
                                        src="/img/ICONO-3.png"
                                        alt="ICONO-2"
                                        className="pasos-img img-fluid"
                                      >
                                      </img>
                                      
                                      <h4 className=" fs-5 fw-bold mt-3 mt-md-3">Captura tu número Tuis</h4>
                                      
                                    
                                    </Col>

                                    {/* --- Línea separadora 2 --- */}
                                    <Col lg={1} className="d-none d-lg-flex align-items-center">
                                      <div className="w-100" style={{ borderTop: '3px dashed #6149B7' }}></div>
                                    </Col>

                                    <Col xs={12} md={6} lg={2} className="text-center pt-5 pt-md-4 pt-lg-0">
                                      
                                      <div className="pasos-number d-flex justify-content-center align-items-center rounded-circle mx-auto ">
                                        3
                                      </div>

                                      <img
                                        src="/img/ICONO-4.png"
                                        alt="ICONO-2"
                                        className="pasos-img img-fluid"
                                      >
                                      </img>
                                      
                                      <h4 className=" fs-5 fw-bold mt-3 mt-md-3">Completa tus datos</h4>
                                      
                                    
                                    </Col>

                                    {/* --- Línea separadora 3 --- */}
                                    <Col lg={1} className="d-none d-lg-flex align-items-center">
                                      <div className="w-100" style={{ borderTop: '3px dashed #6149B7' }}></div>
                                    </Col>

                                    <Col xs={12} md={6} lg={2} className="text-center pt-5 pt-md-4 pt-lg-0">
                                      
                                      <div className="pasos-number d-flex justify-content-center align-items-center rounded-circle mx-auto ">
                                        4
                                      </div>

                                      <img
                                        src="/img/ICONO-5.png"
                                        alt="ICONO-2"
                                        className="pasos-img img-fluid"
                                      >
                                      </img>
                                      
                                      <h4 className=" fs-5 fw-bold mt-3 mt-md-3">Confirma tu registro</h4>
                                      
                                    
                                    </Col>
                                    
                                    
                                    


                                    
                                  </Row>
                                </Slide>

                                
                              </Row>

                              {/* Advertencia 1 */}
                              <Row className="mt-lg-3 pt-lg-5 pb-lg-5">
                                <Col lg={12} className="advert-content d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 gap-4 gap-md-4 text-center text-md-start">
                                  
                                    {/* Icono de advertencia amarillo */}
                                    <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#ffc107', fontSize: '50px' }} />

                                    <p className="mb-0"><span className="fw-bold" >Importante:</span> Si adquiriste tu SIM antes del <span className="tuisty-title">9 de enero,</span> recuerda realizar la vinculación antes del <span className="tuisty-title">30 de junio.</span></p>
                                    
                                  
                                </Col>
                              </Row>

                              {/* Porque necesito realizar mi vinculación */}
                              <div className="mt-5 mt-lg-5 pt-lg-5 p-3 pb-md-5 mx-auto text-center ">
                                <h1 className="fs-2 fw-bold pt-2 pb-2 pt-md-5 pb-md-5 ">¿Por qué necesito realizar mi <span className="tuisty-title">vinculación de línea?</span></h1>
                              </div>
                              <Row className="pb-lg-5" >
                                <Col lg={6} className="porqueno-content d-flex flex-column justify-content-md-start align-items-md-start justify-content-center align-items-center gap-4 gap-md-4 text-md-start text-center">
                                    <div className="d-flex flex-column flex-md-row justify-content-md-start align-items-md-start justify-content-center align-items-center gap-4 gap-md-3 text-md-start text-center">
                                      <img
                                      src="img/ICONO-6.png"
                                      alt="ICONO-1"
                                      className="porqueno-content-img  img-fluid"
                                      />

                                      <div>
                                      <p className="fs-5 pt-2">Facilita la validación de titularidad de tu línea.</p>
                                      </div>
                                    </div>

                                    <div className="d-flex flex-column flex-md-row justify-content-md-start align-items-md-start justify-content-center align-items-center gap-4 gap-md-3 text-md-start text-center">
                                      <img
                                      src="img/ICONO-7.png"
                                      alt="ICONO-1"
                                      className="porqueno-content-img  img-fluid"
                                      />

                                      <div>
                                      <p className="fs-5 pt-2">Ayuda a prevenir fraudes o suplantación de identidad.</p>
                                      </div>
                                    </div>

                                    <div className="d-flex flex-column flex-md-row justify-content-md-start align-items-md-start justify-content-center align-items-center gap-4 gap-md-3 text-md-start text-center">
                                      <img
                                      src="img/ICONO-8.png"
                                      alt="ICONO-1"
                                      className="porqueno-content-img  img-fluid"
                                      />

                                      <div>
                                      <p className="fs-5 pt-2">Permite una mejor administración de líneas vinculadas a tu nombre.</p>
                                      </div>
                                    </div>
                                    

                                </Col>

                                <Col lg={6} className="porqueno-content-der d-flex flex-column justify-content-md-start align-items-md-start justify-content-center align-items-center text-md-start text-center">
                                  <p className="pt-2 m-0">Si deseas conocer más información, puedes consultar los <span className="fw-bold">Lineamientos para la identificación de líneas</span>telefónicas móviles publicados en el <span className="fw-bold">Diario Oficial de la Federación (DOF).</span></p>
                                  <Button
                                      className="buy-button-2  border border-3 fs-5 text-uppercase fw-bold fst-italic p-3 rounded-pill"
                                      href="https://www.dof.gob.mx/nota_detalle.php?codigo=5775677&fecha=09/12/2025#gsc.tab=0" target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Consultar lineamientos
                                  </Button>

                                </Col>

                              </Row>  

                              {/* Documentos que necesito */}
                              <div className="mt-5 mt-lg-5 pt-lg-5 p-3 pb-md-4 mx-auto text-center">
                                <h1 className="fs-2 fw-bold pt-2 pb-2 pt-md-5 pb-md-5 mb-md-4">¿Qué <span className="tuisty-title">documentos</span> necesito para vincular mi línea?</h1>
                              </div>
                              <Fade>
                                <Row className="justify-content-center g-4 pb-5">
                                    <Col xs={12} md={6} lg={4}>
                                      <div className="documentos-content h-100">
                                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-lg-start align-items-lg-start gap-4 gap-md-3 text-md-start text-center">
                                          <img
                                          src="img/ICONO-9.png"
                                          alt="ICONO-1"
                                          className="porqueno-content-img  img-fluid"
                                          />

                                          <div>
                                            <p className="fs-5 fw-bold pt-2">Personas físicas mexicanas</p>
                                          </div>
                                        </div> 

                                        <div className="mt-3"> 
                                          <ul>
                                            <li>Credencial para votar (INE) VIGENTE.</li>
                                            <li>Pasaporte mexicano vigente.</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </Col>

                                    <Col xs={12} md={6} lg={4}>
                                      <div className="documentos-content h-100">
                                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-lg-start align-items-lg-start gap-4 gap-md-3 text-md-start text-center">
                                          <img
                                          src="img/ICONO-10.png"
                                          alt="ICONO-1"
                                          className="porqueno-content-img  img-fluid"
                                          />

                                          <div>
                                            <p className="fs-5 fw-bold pt-2">Personas extranjeras</p>
                                          </div>
                                        </div> 

                                        <div className="mt-3"> 
                                          <ul>
                                            <li>Pasaporte vigente del país de origen.</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </Col>

                                    <Col xs={12} md={6} lg={4}>
                                      <div className="documentos-content h-100">
                                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-lg-start align-items-lg-start gap-4 gap-md-3 text-md-start text-center">
                                          <img
                                          src="img/ICONO-9.png"
                                          alt="ICONO-1"
                                          className="porqueno-content-img  img-fluid"
                                          />

                                          <div>
                                            <p className="fs-5 fw-bold pt-2">Personas morales</p>
                                          </div>
                                        </div> 

                                        <div className="mt-3"> 
                                          <ul>
                                            <li>Documento oficial que contenga RFC y razón social.</li>
                                            <li>CURP vigente del representante legal o titular de la cuenta.</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </Col>
                                </Row>
                              </Fade>
                              
                              {/* Advertencia 2 */}
                              <Row className="">
                                <Col lg={12} className="advert-content d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 gap-4 gap-md-4 text-center text-md-start">
                                  
                                    {/* Icono de advertencia amarillo */}
                                    <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#ffc107', fontSize: '50px' }} />

                                    <p className="mb-0"><span className="fw-bold" >Importante:</span> Todos los documentos deberán encontrarse vigentes. En caso contrario, la vinculación podrá ser rechazada. </p>
                                    
                                  
                                </Col>
                              </Row>

                              {/* Preguntas frecuentes*/}
                              <div className="mt-5 mt-lg-5 pt-lg-5 p-3 pb-md-5 mx-auto text-center ">
                                <h1 className="fs-2 fw-bold pt-2 pb-2 pt-md-5 pb-md-4 ">Preguntas <span className="tuisty-title">frecuentes</span></h1>
                              </div>
                              <Row className="pb-lg-5  justify-content-center">
                                
                                <Col lg={6} className="mx-auto text-start">
                                    <div className="faq-content w-100 p-0">
                                        <div className="faq-category-section">
                                            {misPreguntasVinculacion.map((item) => (
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
                                                        <h3 className="fs-5 m-0">{item.question}</h3>
                                                        <span className="faq-icon">
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </span>
                                                    </div>
                                                    <Collapse in={activeItem === item.id}>
                                                        <div id={`faq-collapse-${item.id}`}>
                                                            <div className="faq-answer">
                                                                <p className='pt-3 m-0'>{item.answer}</p>
                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6} className="mx-auto text-start">
                                    <div className="faq-content w-100 p-0">
                                        <div className="faq-category-section">
                                            {misPreguntasVinculacionDos.map((item) => (
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
                                                        <h3 className="fs-5 m-0">{item.question}</h3>
                                                        <span className="faq-icon">
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </span>
                                                    </div>
                                                    <Collapse in={activeItem === item.id}>
                                                        <div id={`faq-collapse-${item.id}`}>
                                                            <div className="faq-answer">
                                                                <p className='pt-3 m-0'>{item.answer}</p>
                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                              </Row>

                              {/*Recuadros*/}
                              <Row className="pb-lg-5 justify-content-center">
                               <Col lg={6} className="whats-content d-flex flex-column flex-md-row justify-content-md-start align-items-md-start justify-content-center align-items-center gap-4 gap-md-4 text-md-start text-center">

                              
                                    <img
                                      src="img/ICONO-12.png"
                                      alt="ICONO-12"
                                      className="whats-content-img  img-fluid"
                                    />

                                    <div>
                                      <h3 className="fs-4 fw-bold  ">¿Necesitas ayuda?</h3>
                                      <p className="m-0">Estamos aquí para apoyarte durante el proceso de vinculación.</p>
                                      <Button
                                        className="buy-button-3  border border-3 fw-bold fst-italic mt-3 px-4 py-2 rounded-pill"
                                        href="https://wa.link/8ixi0l" target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Contáctanos por WhatsApp
                                     </Button>
                                    </div>
                                    
                                    

                                </Col>

                                <Col lg={6} className="avisopriv-content-der d-flex flex-column justify-content-md-start align-items-md-start justify-content-center align-items-center text-md-start text-center mt-5 mt-lg-0">
                                  <h3 className="fs-4 fw-bold  ">Aviso de Privacidad</h3>
                                  <p className="pt-2 m-0">Tus datos están protegidos conforme a la Ley Federal de Protección de Datos Personales y son utilizados únicamente para el proceso de vinculación de líneas.</p>
                                  <Button
                                      className="buy-button-4  border border-3 fw-bold fst-italic mt-3 px-4 py-2 rounded-pill"
                                      href="https://tuis.com.mx/aviso-de-privacidad" target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Consultar aviso de privacidad
                                  </Button>

                                </Col>             
                              </Row> 




                            </Container>
                          </div>
                        </section>
                      </main>
            
                      <FloatingWhatsAppButton/>
                      <AppStoreTuis/>
                      <FooterComponent />
                  </>

              )}

              </>    
                  
    );
}

export default VinculaLinea
