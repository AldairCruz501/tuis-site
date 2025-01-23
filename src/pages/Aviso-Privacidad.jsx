import { useEffect, useState } from "react";
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './Aviso-Privacidad.css';
import Loading from '../components/Loading';

function AvisoPrivacidad () {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
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
                                <h1 className='fw-bold privacy-title display-4'>Aviso de Privacidad</h1>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    INBTEL, S.A. DE C.V., mejor conocido como INBTEL con domicilio 
                                    Tampico Centro, 607, Tampico Centro, C.P. 89000, Tamaulipas, 
                                    y portal de internet <a href="http://www.tuis.com.mx" target='_blank' className='link-privacy'>www.tuis.com.mx</a>, 
                                    es el responsable del uso y protección de sus datos personales, 
                                    y al respecto le informamos lo siguiente: 
                                </p>
                                <h4 className="mt-4 fw-bold privacy-subtitle fs-3">¿Para qué fines utilizaremos sus datos personales?</h4>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Los datos personales que recabamos de usted, los utilizaremos 
                                    para las siguientes finalidades que son necesarias para el servicio 
                                    que solicita:
                                </p>
                                <ul className='text-body-secondary fs-5 mt-3'>
                                    <li>Para confirmar y verificar su identidad.</li>
                                    <li>
                                        Para llevar a cabo algunas o todas las actividades necesarias para el desarrollo y cumplimiento 
                                        de las obligaciones que se originen y deriven de la relación contractual y/o comercial de la prestación de servicios.
                                    </li>
                                    <li>Envío de promociones.</li>
                                    <li>Facturación y cobranza.</li>
                                    <li>Entrega de productos y/o para la gestión de servicios y/o aplicaciones.</li>
                                </ul>
                                <h4 className="mt-4 fw-bold privacy-subtitle fs-3">¿Qué datos personales utilizaremos para estos fines?</h4>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
                                </p>
                                <ul className='text-body-secondary fs-5 mt-3'>
                                    <li>Datos de identificación.</li>
                                    <li>Datos de contacto.</li>
                                    <li>Datos sobre características físicas.</li>
                                    <li>Datos laborales.</li>
                                    <li>Patrimoniales y/o financieros.</li>
                                </ul>
                                <h4 className="mt-4 fw-bold privacy-subtitle fs-3">¿Cómo puedo acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</h4>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos 
                                    (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta 
                                    o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo 
                                    utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). 
                                    Estos derechos se conocen como derechos ARCO.
                                </p>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del siguiente medio:
                                    <a href="mailto:contacto@inbtel.com" className='link-privacy'> contacto@inbtel.com</a> 
                                </p>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Para conocer el procedimiento y requisitos para el ejercicio de los derechos ARCO, ponemos a su disposición el siguiente medio vía 
                                    solicitud por correo electrónico: <a href="mailto:contacto@inbtel.com" className='link-privacy'>contacto@inbtel.com</a> 
                                </p>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos 
                                    ARCO, son los siguientes:
                                </p>
                                <ul className='text-body-secondary fs-5 mt-3 list-style'>
                                    <li>Nombre de la persona o departamento de datos personales: Atención a Clientes</li>
                                    <li>Domicilio: Tampico Centro, 607, Tampico Centro, C.P. 89000, Tamaulipas.</li>
                                    <li>Correo electrónico: <a href="mailto:contacto@inbtel.com" className='link-privacy'>contacto@inbtel.com</a></li>
                                </ul>
                                <h4 className="mt-4 fw-bold privacy-subtitle fs-3">Usted puede revocar su consentimiento para el uso de sus datos personales</h4>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. 
                                    Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el 
                                    uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. 
                                    Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos 
                                    seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.
                                </p>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Para revocar su consentimiento deberá presentar su solicitud a través del siguiente medio: <a href="mailto:contacto@inbtel.com" className='link-privacy'>contacto@inbtel.com</a> 
                                </p>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Para conocer el procedimiento y requisitos para la revocación del consentimiento, ponemos a su disposición el 
                                    siguiente medio por el cual podrá solicitarlos vía correo electrónico: <a href="mailto:contacto@inbtel.com" className='link-privacy'>contacto@inbtel.com</a> 
                                </p>
                                <h4 className="mt-4 fw-bold privacy-subtitle fs-3">¿Cómo puedo limitar el uso o divulgación de su información personal?</h4>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes medios: <a href="mailto:contacto@inbtel.com" className='link-privacy'>contacto@inbtel.com</a> 
                                </p>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales 
                                    es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al 
                                    navegar en nuestra página. Los datos personales que recabamos a través de estas tecnologías, los utilizaremos para los 
                                    siguientes fines de mejorar el servicio.
                                </p>
                                <div>
                                    <p className='text-body-secondary fs-5 mt-3 mb-0'>
                                        Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
                                    </p>
                                    <ul className='text-body-secondary fs-5'>
                                        <li>Identificadores, nombre de usuario y contraseñas de una sesión</li>
                                        <li>Idioma preferido por el usuario</li>
                                        <li>Región en la que se encuentra el usuario</li>
                                        <li>Tipo de navegador del usuario</li>
                                        <li>Tipo de sistema operativo del usuario</li>
                                        <li>Fecha y hora del inicio y final de una sesión de un usuario</li>
                                        <li>Páginas web visitadas por un usuario</li>
                                        <li>Búsquedas realizadas por un usuario</li>
                                        <li>Publicidad revisada por un usuario</li>
                                        <li>Listas y hábitos de consumo en páginas de compras</li>
                                    </ul>
                                </div>
                                <h4 className="mt-4 fw-bold privacy-subtitle fs-3">¿Cómo puedo limitar el uso o divulgación de su información personal?</h4>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos 
                                    legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; 
                                    de cambios en nuestro modelo de negocio, o por otras causas.
                                </p>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de: <a href="https://tuis.com.mx" className='link-privacy'>https://tuis.com.mx/</a> 
                                </p>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    El procedimiento a través del cual se llevarán a cabo las notificaciones sobre cambios o actualizaciones al presente 
                                    aviso de privacidad es el siguiente: Publicación en la página de Internet.
                                </p>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Su consentimiento para el tratamiento de sus datos personales.
                                </p>
                                <p className='text-body-secondary fs-5 mt-3'>
                                    Usted acepta que ha leído los términos antes expuestos y acepta que utilicemos sus datos para los fines señalados en el 
                                    presente documento. Si usted no está de acuerdo con los términos antes expuestos, deberá enviar un correo electrónico 
                                    manifestando que no otorga su consentimiento a la dirección del correo electrónico: <a href="mailto:contacto@inbtel.com" className='link-privacy'>contacto@inbtel.com</a> 
                                </p>
                                <p className='text-body-secondary fs-6 mt-5 pt-5 text-end'>
                                    <span className='fw-bold'>Última actualización:</span> Septiembre 2024 
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <FooterComponent></FooterComponent>
                </>
            )}
        </>
    )
}

export default AvisoPrivacidad