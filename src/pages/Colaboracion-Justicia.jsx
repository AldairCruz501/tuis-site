import { useEffect, useState } from "react";
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './Colaboracion-Justicia.css';
import Loading from '../components/Loading';

function ColaboracionJusticia () {
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
                    <Container className='my-5 mx-auto'>
                        <Row>
                            <Col>
                                <h1 className='fw-bold privacy-title display-4'>Colaboración con la Justicia</h1>
        
                                <p className='text-body-secondary fs-5 mt-3'>
                                    <span className="fw-bold">Inbtel, S.A. de C.V.</span>, titular de una Autorización para establecer y operar o explotar una comercializadora de
                                    servicios de telecomunicaciones notificado por el Instituto Federal de Telecomunicaciones el 15 de marzo de
                                    2018, con número de folio FET096723AU-517034, manifiesta que en cumplimiento a los artículos 189 y 190 de la
                                    Ley Federal de Telecomunicaciones y Radiodifusión y al artículo Tercero Transitorio de los Lineamientos de
                                    Colaboración en materia de Seguridad y Justicia, se publican los datos del Área Responsable para atender los
                                    requerimientos de información de Autoridades Facultadas y Designadas sobre:
                                </p>
                                <ul className='text-body-secondary list-style fs-5 mt-3'>
                                    <li>Datos conservados;</li>
                                    <li>
                                        Localización geográfica en tiempo real de los dispositivos o equipos terminales móviles, y
                                    </li>
                                    <li>Órdenes judiciales de intervención de comunicaciones.</li>
                                </ul>
                                <div className='text-body-secondary fs-5 mt-3'>
                                    <p className="m-0">
                                        <span className="fw-bold">Departamento Responsable:</span> Equipo legal Inbtel, S.A. de C.V.,
                                    </p>
                                    <p className="m-0">
                                        <span className="fw-bold">Correo electrónico:</span> <a href="mailto:colaboracion@tuis.com.mx" className="text-decoration-none">colaboracion@tuis.com.mx</a>
                                    </p>
                                    <p className="m-0">
                                        <span className="fw-bold">Número de contacto:</span> llamadas 8335260000 WhatsApp 5595216000
                                    </p>
                                    <p className="m-0">
                                        <span className="fw-bold">Disponibilidad:</span> 24/7 los 365 dias del año
                                    </p>
                                    <p className="m-0">
                                        <span className="fw-bold">Domicilio:</span> Tamaulipas 607, Tampico Centro, C.P. 89000, Tampico, Tamaulipas, México.
                                    </p>
                                </div>
                                
                            </Col>
                        </Row>
                    </Container>
                    <FooterComponent></FooterComponent>
                </>
            )}
        </>
    )
}

export default ColaboracionJusticia