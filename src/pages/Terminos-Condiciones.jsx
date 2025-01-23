
import { useEffect, useState } from "react";
import NavbarComponent from '../components/Navbar'
import FooterComponent from '../components/Footer'
import './Terminos-Condiciones.css'
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faWhatsapp, faInstagram, faSnapchat, faTelegram, faSignalMessenger, faFacebookMessenger, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Loading from '../components/Loading';

function TerminosCondiciones () {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      };
      
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
                                <h1 className='fw-bold conditions-title display-3 mb-3 text-center text-lg-start'>Términos y Condiciones</h1>
                                <section className='pt-2'>
                                    <h2 className='fw-bold conditions-title display-5 text-center text-lg-start'>Términos y Condiciones Generales</h2>
                                    <p className='text-body-secondary fs-5 mt-3 mb-4 text-justify'>
                                        Tuis by INBTEL (en adelante Tuis) es una marca registrada y licenciada en favor de Altán
                                        redes (en adelante Altán) quien es el Operador del Servicio de Telefonía Móvil y único
                                        responsable frente al Usuario final por la prestación del servicio. 
                                    </p>
                                    <Accordion defaultActiveKey={null} flush>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start'>1. Relación Contractual.</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Para efectos de este documento, el “Usuario” debe ser entendido como toda aquella
                                                    persona que ingrese al portal mediante un equipo de cómputo y/o de comunicación (en
                                                    adelante el Usuario), aceptando utilizar dispositivos, software, o cualquier otro medio
                                                    tendiente a interferir en perjuicio de las actividades y/o de las operaciones del Portal o
                                                    en las bases de datos y/o información que se contenga en el mismo.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Se informa a los Usuarios que los presentes Términos y Condiciones les son aplicables
                                                    por el simple uso o acceso al Portal, por lo que entendemos que los acepta y acuerda en
                                                    obligarse en su cumplimiento.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Las presentes Condiciones generan obligaciones entre Usted y Tuis. Por ello, Usted
                                                    debera de leer detenidamente su contenido. Si usted no esta de acuerdo con cualquiera
                                                    de las condiciones o disposiciones establecidas en las presentes Condiciones, debera
                                                    abstenerse de utilizar la Plataforma, dar de baja su Usuario o cuenta y/o eliminar la
                                                    aplicación, según sea el caso.
                                                </p>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify'>
                                                        El uso de la Plataforma implica la aceptación de:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 list-style text-justify'>
                                                        <li>
                                                            Los Términos estipulados en el Contrato de Adhesión y el Aviso de Privacidad,
                                                            los cuales se encuentran disponibles para su consulta la página de internet de
                                                            <a href="http://www.tuis.com.mx" target='_blank' className='link-conditions-tuis text-decoration-none'>Tuis</a>.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Tuis se reserva el derecho de cambiar, modificar y/o reemplazar las presentes
                                                    Condiciones en cualquier momento, al igual que sus planes de contratacio n sin
                                                    necesidad de previo aviso y dichas modificaciones entrara n en vigor al dí a siguiente a
                                                    aque l en que hayan sido publicadas en la Plataforma.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    El acceso o uso continuo de la Plataforma después de que surtan efectos las
                                                    modificaciones a que se hizo referencia anteriormente implica su consentimiento a
                                                    vincularse y obligarse conforme a las nuevas Condiciones.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start'>2. Condiciones de uso de la Plataforma.</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Para poder utilizar la Plataforma, Usted debe de contar con edad y capacidad suficiente,
                                                    de conformidad con la legislación que le resulte aplicable, a efecto de estar en
                                                    posibilidad de obligarse conforme a las presentes Condiciones.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Usted es responsable de adquirir y actualizar el hardware compatible o los dispositivos
                                                    necesarios para acceder y utilizar los Servicios y/o Servicios Adicionales y/o la
                                                    Plataforma. Tuis no garantiza que los Servicios y/o Servicios Adicionales, o cualquier
                                                    parte de estos, funcionen en cualquier hardware o dispositivo. Los Servicios y/o
                                                    Servicios Adicionales pueden ser objeto de disfunciones o retrasos inherentes a
                                                    incompatibilidades informáticas y la interacción con otras comunicaciones
                                                    electrónicas.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Usted se obliga a utilizar los Servicios y/o Servicios Adicionales de forma personal, en
                                                    estricto apego a la legislación y regulación aplicable, así como a las buenas costumbres.
                                                    Tuis se reserva el derecho de retirar, negar o restringir el acceso a los Servicios y/o
                                                    Servicios Adicionales por causa justificada y dando aviso al Usuario de dichos motivos.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start'>3. Alcance de los Servicios y/o Servicios Adicionales.</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify'>
                                                        Los Servicios y/o Servicios Adicionales son regidos, en lo principal, por el Contrato que
                                                        usted celebre con Tuis, en su caso. A su vez, para la contratación de los Servicios y/o
                                                        Servicios Adicionales, Tuis se pone a su disposición:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 list-style text-justify'>
                                                        <li>
                                                            A través de la Plataforma,
                                                        </li>
                                                        <li>
                                                            Aplicación Móvil,
                                                        </li>
                                                        <li>
                                                            En los puntos de venta señalados,
                                                        </li>
                                                        <li>
                                                            Distribuidor autorizado,
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Para contratar los Servicios y/o Servicios Adicionales a través de la Plataforma de <a href="http://www.tuis.com.mx" target='_blank' className='link-conditions-tuis text-decoration-none'>Tuis</a>,
                                                    el cliente deberá identificar y seleccionar los servicios deseados y seguir las
                                                    instrucciones correspondientes. Tuis verificará la disponibilidad de los Servicios y/o
                                                    Servicios Adicionales en la zona correspondiente al código postal proporcionado, así
                                                    como la compatibilidad del dispositivo del cliente mediante el Código IMEI.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Es responsabilidad de usted asegurarse de que su dispositivo sea compatible antes de
                                                    adquirir el servicio. En caso de contratar sin haber verificado previamente dicha
                                                    compatibilidad, el cliente acepta que el servicio podría no funcionar conforme a lo
                                                    estipulado, y Tuis no asumira responsabilidad alguna por las consecuencias que esto
                                                    pueda generar.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Usted deberá escoger el plan tarifario que desee contratar e ingresar los datos de envío
                                                    de la tarjeta SIM o eSIM, del equipo en donde utilizará el servicio de Tuis.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Tuis únicamente se hará responsable por la funcionalidad del servicio adquirido
                                                    directamente con él, bajo los términos y condiciones aplicables a esa compraventa.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Tuis subcontrata el servicio de mensajería y paquetería el cual lo acompañara en el
                                                    seguimiento desde su compra hasta la entrega de la misma; sin embargo, Tuis no se
                                                    hace responsable por los tiempos de entrega o algún tipo de retraso o percance con la
                                                    entrega de la paquetería.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    En el supuesto de que la paquetería no llegue al domicilio por causas ajenas a Tuis, el
                                                    Cliente deberá de pagar el costo del envío de la tarjeta SIM.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Otra modalidad para contratar los Servicios y/o Servicios Adicionales es mediante la
                                                    plataforma donde podrá elegir el plan seleccionado dentro del “carrito de compra virtual”
                                                    y seleccionar el pago en tiendas físicas donde se le otorgará una ficha de pago
                                                    para que posteriormente acuda a la tienda más cercana y realice el pago en efectivo.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Una vez realizado lo anterior, la contratación de los Servicios y/o Servicios Adicionales,
                                                    en su caso, será perfeccionada por usted al momento de dar su consentimiento a través
                                                    de la validación que realice mediante la plataforma y al realizar el pago respectivo.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    El Usuario que actúe, de forma enunciada más no limitada, con alevosía, ventaja, dolo,
                                                    y/o mala fe al solicitar el servicio de telefonía y/o servicios adicionales, será
                                                    considerado como fraude y se le suspenderá o cancelará su línea telefónica después de
                                                    hacerle de su conocimiento al Cliente los motivos de la cancelación y en caso de ser
                                                    necesario Tuis podrá presentar cargos contra este.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Para todos los efectos legales, usted reconoce que las validaciones a que se hace
                                                    referencia en los párrafos anteriores configuran una aceptación de las condiciones la
                                                    cual es válida para otorgar su consentimiento en los términos de la legislación aplicable.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Sin importar el método de contratación utilizado, Tuis puede considerar válido que
                                                    usted otorgó su consentimiento de manera inequívoca a través de medios electrónicos
                                                    si, en un plazo de tres días naturales después de realizar algún pago relacionado con los
                                                    Servicios, Servicios Adicionales o la compra de equipo, usted no presenta ninguna queja
                                                    o solicitud de aclaración, siempre y cuando no haya hecho uso de dichos servicios.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Usted podra contratar en cualquier momento Servicios Adicionales, para lo cual deberá
                                                    de encontrarse al corriente con los pagos de los Servicios contratados anteriormente y
                                                    con las obligaciones contraí das por virtud de la celebracio n del Contrato.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    El pago a través de tarjetas de crédito, débito o de servicios, es operado por terceros
                                                    ajenos a Tuis, por lo que Tuis en ningún momento tiene acceso a estos datos, y por lo
                                                    tanto no retendrá la información financiera de ningún Usuario.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    El pago por la cuota de activación, adquisición de Servicios, gastos adicionales en que
                                                    se incurra por exceder los límites, o cualquier otro concepto por el que usted se haya
                                                    obligado, podrá realizarse a través de cualquiera de los métodos de pago referidos
                                                    anteriormente y establecidos en la Plataforma.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    De conformidad con la legislación aplicable, queda estrictamente prohibido al Usuario
                                                    de los Servicios y/o Servicios Adicionales y/o de la Plataforma utilizar los mismos para
                                                    cualquier fin ilícito. Así mismo, el suscriptor reconoce que los Servicios y/o Servicios
                                                    Adicionales y/o la Plataforma pueden presentar fallas o disminuciones en la calidad
                                                    debido a causas no imputables a Tuis, como lo es el caso fortuito o fuerza mayor, así
                                                    como por acciones realizadas por terceros independientes a Tuis. Por lo anterior, Tuis
                                                    no se hace responsable de las afectaciones que podría tener usted debido a dichas fallas.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start'>4. Liberación de Responsabilidad.</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Se informa a los usuarios que las líneas telefónicas de Tuis tienen un ciclo de vida de
                                                    hasta 70 días, durante el cual podrán reclamarlas y mantenerlas activas realizando una
                                                    recarga mínima, de acuerdo con las opciones disponibles y vigentes. Una vez transcurrido 
                                                    dicho periodo, el ciclo de vida del chip concluirá, y la línea se dará de baja de manera 
                                                    definitiva, por lo que no podrá ser recuperada. Al contratar el servicio con Tuis, 
                                                    el usuario acepta y está de acuerdo con esta condición.
                                                </p>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify'>
                                                        Al contratar los Servicios y/o Servicios Adicionales proporcionados por Tuis y, a su vez,
                                                        aceptar las presentes Condiciones, usted reconoce que el servicio de
                                                        telecomunicaciones es un servicio concesionado y regulado por los Estados Unidos
                                                        Mexicanos a través por el Instituto Federal de Telecomunicaciones. Por ello, usted
                                                        reconoce y libera a Tuis de cualquier tipo de responsabilidad civil, mercantil,
                                                        administrativa, laboral, penal, contractual, extracontractual o cualquier otra que
                                                        pudiera surgir en virtud de alguna falla, suspensión, cancelación o interrupción en la
                                                        prestación de los Servicios y/o Servicios Adicionales proporcionados por Tuis por
                                                        causas ajenas a éste, entre las que se encuentran de manera enunciativa más no
                                                        limitativa:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 list-style text-justify'>
                                                        <li>
                                                            Causas de fuerza mayor y/o caso fortuito que puedan darse por cualquier hecho
                                                            de la naturaleza o del hombre que sea imprevisible, o que, siendo previsible, éste
                                                            sea inevitable. Dentro de esta categoría esta incluido de manera enunciativa lo
                                                            siguiente: terremotos, ciclones, tormentas, huracanes, lluvias tropicales,
                                                            tornados, cualquier desastre natural, manifestaciones, huelgas, pandemias,
                                                            endemias, contingencias sanitarias y/o guerras, entre otros.
                                                        </li>
                                                        <li>
                                                            Revocación, cancelación, suspensión, terminación o de cualquier manera
                                                            afectación de la concesión otorgada por el Instituto Federal de
                                                            Telecomunicaciones para prestar los Servicios y/o Servicios Adicionales en
                                                            términos de la legislación aplicable.
                                                        </li>
                                                        <li>
                                                            Fallas o afectaciones físicas, mecánicas, eléctricas, digitales y/o tecnológicas a
                                                            cualquiera de los medios a través de los cuales Tuis presta los Servicios y/o
                                                            Servicios Adicionales, de manera directa o indirecta, considerando que estos
                                                            pueden ser o no propiedad de Tuis.
                                                        </li>
                                                        <li>
                                                            Incompatibilidades tecnológicas, presentes o futuras, en los dispositivos de
                                                            comunicaciones en los que se utilicen los Servicios y/o Servicios Adicionales.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Usted se obliga a utilizar los Servicios y/o Servicios Adicionales de forma personal, en
                                                    estricto apego a la legislación y regulación aplicable, así como a las buenas costumbres.
                                                    Tuis se reserva el derecho de retirar, negar o restringir el acceso a los Servicios y/o
                                                    Servicios Adicionales por causa justificada y dando aviso al Usuario de dichos motivos.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start'>5. Privacidad de la Información.</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Tuis hace de su conocimiento que todos los datos personales que le sean
                                                    proporcionados sera n tratados de conformidad con lo dispuesto en el 
                                                    <Link to="/aviso-de-privacidad" onClick={handleScrollToTop} className='link-conditions-tuis text-decoration-none'> Aviso de Privacidad</Link>
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start'>6. Ideas No Solicitadas.</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Tuis agradece las sugerencias y comentarios que recibe acerca del uso de su Sitio Web,
                                                    sus productos y servicios, Tuis no acepta ni solicita a los Usuarios, bajo ninguna
                                                    circunstancia que estos le presenten ideas, sugerencias creativas o propuestas que no
                                                    hayan sido solicitadas, con excepción de que Tuis lo manifieste explícitamente; todas las
                                                    ideas, comentarios, sugerencias (de forma enunciativa mas no limitativa), que usted nos
                                                    haga llegar se considerarán de forma automática como información no confidencial y
                                                    podrán ser utilizadas por Tuis sin tener ninguna obligación frente a Usted respecto a la
                                                    forma en que Tuis utilice dichas ideas.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4'>7. Leyes Aplicables.</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Para la interpretación y cumplimiento de las presentes Condiciones, así como para la
                                                    atención y resolución de cualquier controversia jurídica que se suscite en relación con
                                                    las mismas, usted se somete expresamente a la legislación y competencia de los
                                                    tribunales competentes, renunciando expresamente a cualquier otro fuero que, por
                                                    razón de su domicilio presente o futuro, o por cualquier otra causa, pudiera
                                                    corresponderle
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start'>8. Promociones.</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Todas nuestras promociones cuentan con sus propias bases, términos y condiciones,
                                                    para adquirir alguna; el Usuario deberá considerar la forma de participación, cumplir
                                                    con la dinámica o requisitos para obtener el beneficio, en caso de no cumplir con los
                                                    requisitos de la dinámica el beneficio no puede ser exigible.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    En caso de que alguna de las promociones no cuente con sus propios términos y
                                                    condiciones, es decir, requisitos para obtener el beneficio que le corresponda a dicha
                                                    promoción; El Usuario se debera someter a los presentes términos y condiciones.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Todas las promociones y el uso de éstas son de carácter personal, e intransferible; Tuis
                                                    se reserva el derecho de otorgar los beneficios, los beneficios no podrán ser canjeados
                                                    por dinero o equipos, de igual forma el uso y/o participación a cualquier promoción lo
                                                    obliga a la aceptación de los presentes términos y condiciones, a la obligación del
                                                    Contrato de prestación de servicios y al Aviso de Privacidad de Tuis.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    El Usuario que actúe, de manera enunciativa más no limitativa con alevosía, ventaja,
                                                    dolo, y/o mala fé al solicitar el servicio de telefonía y/o la adquisición de Servicios, o al
                                                    participar en las promociones que publique Tuis, sera considerado como fraude, será
                                                    descalificado y Tuis podra presentar cargos contra este.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Para validar los datos del titular de la línea telefónica es necesario que otorguen a Tuis
                                                    sus datos reales.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Por lo anterior, el Usuario consiente que Tuis le podrá requerir prueba fehaciente de
                                                    que los datos que ha proporcionado sean reales, en caso de que Tuis considere que el
                                                    Usuario cae en falsedad, sera considerado como fraude.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    En el supuesto de que el Usuario participante de cualquiera de las promociones de Tuis,
                                                    le sea notificado que es acreedor a un beneficio, previa comunicación con Tuis, el
                                                    Usuario debera confirmar mediante correo electrónico o a través del número de Atención
                                                    al Cliente de Tuis su participación, en el supuesto de no confirmar dentro de un periodo
                                                    de 24 (veinticuatro) horas perdera el beneficio.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    El Usuario debera consultar la fecha de vigencia de las promociones, en el supuesto de
                                                    no estar indicada, se entiende que es hasta agotar existencias. Para conocer la
                                                    disponibilidad de las promociones el Usuario puede comunicarse a trave s de nuestros
                                                    canales oficiales.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4'>9. Plataformas de terceros.</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Las plataformas de terceros se encuentran desvinculadas a los presentes términos y
                                                    condiciones, la responsabilidad es exclusiva de Tuis.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </section>
                                <section className='pt-5'>
                                    <h2 className='fw-bold conditions-title display-5 text-center text-lg-start'>Términos y Condiciones de Redes Sociales Ilimitadas</h2>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        En adelante Tuis estipulan las condiciones generales de uso para Datos incluidos en el
                                        Límite Máximo de Tráfico de Redes Sociales “RRSS” Territorio Nacional y Límite
                                        Máximo de Tráfico de RRSS en Roaming Internacional. El servicio de Redes Sociales
                                        Ilimitadas permite al usuario acceder de manera ilimitada a las aplicaciones de redes
                                        sociales especificadas en el contrato, sin que el consumo de datos afecte el límite de su
                                        paquete de datos principal. Esta funcionalidad estará disponible únicamente dentro del
                                        territorio nacional, a menos que se estipule lo contrario en el contrato. Además, Tuis se
                                        reserva el derecho de modificar estas condiciones sin previo aviso, por lo que el usuario
                                        acepta dichas condiciones al contratar y/o adquirir el servicio. 
                                    </p>                            
                                    <p className='text-body-secondary fs-5 mt-3 mb-4 text-justify'>
                                        Las Redes Sociales Ilimitadas se rigen bajo las siguientes condiciones:
                                    </p>
                                    <Accordion defaultActiveKey={null} flush>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-whatsapp-subtitle fs-4 text-center text-lg-start'>
                                                    WhatsApp <FontAwesomeIcon icon={faWhatsapp} className="fs-3 d-inline-block privacy-icon-whatsapp" />
                                                </h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    <span className='fw-bold'>Zona de uso:</span> México, Estados Unidos de Norteamérica y Canadá .
                                                </p>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>Envío de mensajes de texto, notas de voz, fotos, videos, archivos, contactos de la agenda.</li>
                                                        <li>Descargar o guardar fotos y videos.</li>
                                                        <li>Recibir notificaciones desde la aplicación.</li>
                                                        <li>Compartir una ubicación propia y consultar ubicación de cualquier contacto.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso No incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>
                                                            Descargar la aplicación 
                                                            <a href='https://www.whatsapp.com/download?lang=es_LA' target='_blank' className='fw-bold privacy-whatsapp-subtitle text-decoration-none mx-1'>
                                                                WhatsApp <FontAwesomeIcon icon={faWhatsapp} className="fs-6 d-inline-block privacy-icon-whatsapp" />
                                                            </a> 
                                                        </li>
                                                        <li>
                                                            Compartir, reproducir, cargar o descargar videos a trave s de aplicaciones
                                                            distintas a la oficial
                                                            <a href='https://www.whatsapp.com/' target='_blank' className='fw-bold privacy-whatsapp-subtitle text-decoration-none mx-1'>
                                                                WhatsApp <FontAwesomeIcon icon={faWhatsapp} className="fs-6 d-inline-block privacy-icon-whatsapp" />
                                                            </a> 
                                                        </li>
                                                        <li>Redireccionamiento a cualquier link o URL externo a la aplicación oficial.</li>
                                                        <li>Servicio de llamadas de voz y video llamadas.</li>
                                                        <li>Transmisión de video en tiempo real; la reproducción de video en tiempo real.</li>
                                                        <li>Compartir ubicación propia o seguir una ubicación en tiempo real.</li>
                                                        <li>Visualizar, descargar, compartir fotos y/o videos en la funcionalidad Canales.</li>
                                                        <li>Cualquier otra funcionalidad que no esté enlistada en el uso incluido.</li>
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start privacy-telegram-subtitle'>
                                                    Telegram <FontAwesomeIcon icon={faTelegram} className="fs-3 privacy-icon-telegram" />
                                                </h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    <span className='fw-bold'>Zona de uso:</span> México, Estados Unidos de Norteamérica y Canadá .
                                                </p>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>Envío de mensajes de texto, notas de voz, fotos, videos, archivos, contactos de la agenda.</li>
                                                        <li>Descargar o guardar fotos y videos.</li>
                                                        <li>Recibir notificaciones desde la aplicación.</li>
                                                        <li>Compartir una ubicación propia y consultar ubicación de cualquier contacto.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso No incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>Carga y descarga de fotos fuera de la aplicación oficial.</li>
                                                        <li>
                                                            Compartir, reproducir, cargar o descargar videos a trave s de aplicaciones
                                                            distintas a la oficial
                                                            <a href='https://web.telegram.org/' target='_blank' className='fw-bold privacy-telegram-subtitle text-decoration-none mx-1'>
                                                                Telegram <FontAwesomeIcon icon={faTelegram} className="fs-6 d-inline-block privacy-icon-telegram" />
                                                            </a> 
                                                        </li>
                                                        <li>Redireccionamiento a cualquier link o URL externo a la aplicación oficial.</li>
                                                        <li>Servicio de llamadas de voz y video llamadas.</li>
                                                        <li>Transmisión de video en tiempo real; la reproducción de video en tiempo real.</li>
                                                        <li>Compartir ubicación propia o seguir una ubicación en tiempo real.</li>
                                                        <li>Visualizar, descargar, compartir fotos y/o videos en la funcionalidad Grupos.</li>
                                                        <li>Cualquier otra funcionalidad que no esté enlistada como incluida.</li>
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start privacy-messenger-subtitle'>
                                                    Messenger <FontAwesomeIcon icon={faFacebookMessenger} className="fs-3 privacy-icon-messenger" />
                                                </h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    <span className='fw-bold'>Zona de uso:</span> México, Estados Unidos de Norteamérica y Canadá .
                                                </p>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>Envío de mensajes de texto, notas de voz, fotos, videos, archivos, contactos de la agenda.</li>
                                                        <li>Descargar o guardar fotos y videos.</li>
                                                        <li>Recibir notificaciones desde la aplicación.</li>
                                                        <li>Compartir una ubicación propia y consultar ubicación de cualquier contacto.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso No incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>Carga y descarga de fotos fuera de la aplicación oficial.</li>
                                                        <li>
                                                            Compartir, reproducir, cargar o descargar videos a trave s de aplicaciones
                                                            distintas a la oficial
                                                            <a href='https://www.messenger.com/?locale=es_ES/' target='_blank' className='fw-bold privacy-messenger-subtitle text-decoration-none mx-1'>
                                                                Messenger <FontAwesomeIcon icon={faTelegram} className="fs-6 d-inline-block privacy-icon-messenger" />
                                                            </a> 
                                                        </li>
                                                        <li>
                                                            Redireccionamiento a cualquier link o URL externo a la aplicación oficial, 
                                                            aún cuando este haya sido compartido utilizándola a través de algún estado 
                                                            o mensaje directo.
                                                        </li>
                                                        <li>El servicio de llamadas de voz y video llamadas.</li>
                                                        <li>Transmisión de video en tiempo real; la reproducción de video en tiempo real.</li>
                                                        <li>Compartir una ubicación, propia en vivo o seguir ubicación de cualquier contacto en vivo.</li>
                                                        <li>Cualquier otra funcionalidad no enlistada como incluida.</li>
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start privacy-facebook-subtitle'>
                                                    Facebook <FontAwesomeIcon icon={faFacebook} className="fs-3 privacy-icon-facebook" />
                                                </h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    <span className='fw-bold'>Zona de uso:</span> México.
                                                </p>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>Visualización del muro personal o de cualquier otra persona o grupo.</li>
                                                        <li>Publicación estado personal o el de cualquier otro usuario.</li>
                                                        <li>Publicación de fotos y videos en el muro utilizando las aplicaciones oficiales.</li>
                                                        <li>Guardar fotos del muro personal o compartidas por cualquier grupo o usuario.</li>
                                                        <li>Dar “me gusta” a alguna historia personal, de un grupo o un usuario.</li>
                                                        <li>Envío de mensajes de texto.</li>
                                                        <li>
                                                            Recibir notificaciones a través de las aplicaciones oficiales de
                                                            <a href='https://www.facebook.com/?locale=es_LA' target='_blank' className='fw-bold privacy-facebook-subtitle text-decoration-none mx-1'>
                                                                Facebook <FontAwesomeIcon icon={faFacebook} className="fs-6 d-inline-block privacy-icon-facebook" />
                                                            </a>. 
                                                        </li>
                                                        <li>Compartir una ubicación propia y consultar ubicación de cualquier contacto.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso No incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>
                                                            Descargar la aplicación 
                                                            <a href='https://www.facebook.com/lite/?locale=es_ES' target='_blank' className='fw-bold privacy-facebook-subtitle text-decoration-none mx-1'>
                                                            Facebook <FontAwesomeIcon icon={faFacebook} className="fs-6 d-inline-block privacy-icon-facebook" />
                                                            </a>. 
                                                        </li>
                                                        <li>Carga y descarga de fotos a través de aplicaciones distintas de las oficiales.</li>
                                                        <li>
                                                            Reproducción de videos y la funcionalidad para compartirlos desde la aplicación de
                                                            <a href='https://www.facebook.com/?locale=es_LA' target='_blank' className='fw-bold privacy-facebook-subtitle text-decoration-none mx-1'>
                                                                Facebook <FontAwesomeIcon icon={faFacebook} className="fs-6 d-inline-block privacy-icon-facebook" />
                                                            </a>
                                                            o utilizando otras aplicaciones.
                                                        </li>
                                                        <li>
                                                            Redireccionamiento a cualquier link o URL externo a la aplicación, 
                                                            aún cuando este haya sido compartido utilizándola a través de algún estado 
                                                            o mensaje directo.
                                                        </li>
                                                        <li>El servicio de llamadas de voz y video llamadas.</li>
                                                        <li>Transmisión de video en tiempo real; la reproducción de video en tiempo real.</li>
                                                        <li>Compartir una ubicación, propia en vivo o seguir ubicación de cualquier contacto en vivo.</li>
                                                        <li>Cualquier otra funcionalidad no enlistada como incluida.</li>
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start privacy-instagram-subtitle'>
                                                    Instagram <FontAwesomeIcon icon={faInstagram} className="fs-3 privacy-icon-instagram" />
                                                </h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            <p className='text-body-secondary fs-6 text-justify'>
                                                    <span className='fw-bold'>Zona de uso:</span> México.
                                                </p>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>Visualizar la línea de tiempo personal o de terceros.</li>
                                                        <li>Publicar una foto o video.</li>
                                                        <li>Comentar sobre un foto o video.</li>
                                                        <li>Enviar y recibir mensajes de texto a través del buzón (“Direct”).</li>
                                                        <li>Enviar y recibir fotos o videos a través del buzón (“Direct”).</li>
                                                        <li>Publicar y reproducir historias (“Stories”).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso No incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>
                                                            Descargar la aplicación 
                                                            <a href='https://g.co/kgs/JnRxW1e' target='_blank' className='fw-bold privacy-instagram-subtitle text-decoration-none mx-1'>
                                                                Instagram <FontAwesomeIcon icon={faInstagram} className="fs-6 d-inline-block privacy-icon-instagram" />
                                                            </a>. 
                                                        </li>
                                                        <li>Carga y descarga de fotos o videos fuera de la aplicación, aún y cuando estos hayan sido compartidos a través de la misma.</li>
                                                        <li>
                                                            Compartir fotos o videos a través de otras aplicaciones distintas a
                                                            <a href='https://www.instagram.com/?locale=es_LA' target='_blank' className='fw-bold privacy-instagram-subtitle text-decoration-none mx-1'>
                                                                Instagram <FontAwesomeIcon icon={faInstagram} className="fs-6 d-inline-block privacy-icon-instagram" />
                                                            </a>
                                                            aún y cuando estos se hayan compartido a través de la aplicación.
                                                        </li>
                                                        <li>
                                                            Transmisión de video en tiempo real (“Live Video Streaming”); la reproducción
                                                            de video en tiempo real (“Live Video Streaming”) a manera de espectador.
                                                        </li>
                                                        <li>
                                                            Redireccionamiento a cualquier link o URL externo a la aplicación, 
                                                            aún cuando este haya sido compartido utilizándola a través de un mensaje, 
                                                            publicación, historia o video en tiempo real.
                                                        </li>
                                                        <li>Cualquier otra funcionalidad no enlistada como incluida.</li>
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start privacy-snapchat-subtitle'>
                                                    Snapchat <FontAwesomeIcon icon={faSnapchat} className="fs-3 privacy-icon-snapchat" />
                                                </h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            <p className='text-body-secondary fs-6 text-justify'>
                                                    <span className='fw-bold'>Zona de uso:</span> México.
                                                </p>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>Visualizar “Snaps” personales y/o de terceros.</li>
                                                        <li>Publicar un “Snap”; comentar un “Snap”.</li>
                                                        <li>Enviar y recibir mensajes de texto a través del buzón (“Chat”).</li>
                                                        <li>Enviar y recibir fotos o video a través del buzón (“Chat”).</li>
                                                        <li>Reproducir “Historias” o “Memorias”.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso No incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>
                                                            Descargar la aplicación 
                                                            <a href='https://www.snapchat.com/es/download' target='_blank' className='fw-bold privacy-snapchat-subtitle text-decoration-none mx-1'>
                                                                Snaptchat <FontAwesomeIcon icon={faSnapchat} className="fs-6 d-inline-block privacy-icon-snapchat" />
                                                            </a>. 
                                                        </li>
                                                        <li>Carga y descarga de fotos o videos fuera de la aplicación, aún y cuando estos hayan sido compartidos a través de la misma.</li>
                                                        <li>
                                                            Compartir fotos o videos a través de otras aplicaciones distintas a
                                                            <a href='https://www.snapchat.com/es' target='_blank' className='fw-bold privacy-snapchat-subtitle text-decoration-none mx-1'>
                                                                Snapchat <FontAwesomeIcon icon={faSnapchat} className="fs-6 d-inline-block privacy-icon-snapchat" />
                                                            </a>
                                                            aún y cuando estos se hayan compartido a través de la aplicación.
                                                        </li>
                                                        <li>
                                                            Transmisión de video en tiempo real (“Live Video Streaming”); la reproducción
                                                            de video en tiempo real (“Live Video Streaming”) a manera de espectador.
                                                        </li>
                                                        <li>
                                                            Redireccionamiento a cualquier link o URL externo a la aplicación, 
                                                            aún cuando este haya sido compartido utilizándola a través de un mensaje, 
                                                            publicación, historia o video en tiempo real.
                                                        </li>
                                                        <li>Cualquier otra funcionalidad no enlistada como incluida.</li>
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start privacy-x-subtitle'>
                                                    <FontAwesomeIcon icon={faXTwitter} className="fs-3 privacy-icon-x" /> 
                                                    (Antes <span className='privacy-twitter-subtitle'>twitter</span> <FontAwesomeIcon icon={faTwitter} className="fs-3 privacy-icon-twitter" />)
                                                </h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            <p className='text-body-secondary fs-6 text-justify'>
                                                    <span className='fw-bold'>Zona de uso:</span> México.
                                                </p>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>Visualizar la línea de tiempo personal o de terceros.</li>
                                                        <li>Publicar un tuit; comentar sobre un tuit; dar “me gusta” a un tuit; retuitear un tuit; citar un tuit.</li>
                                                        <li>Envío de mensaje directo.</li>
                                                        <li>Recepción de notificaciones.</li>
                                                        <li>Publicación o cargue de fotos en la línea de tiempo; descargar fotos.</li>
                                                        <li>Compartir ubicación.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify fw-bold'>
                                                        Uso No incluido:
                                                    </p>
                                                    <ul className='text-body-secondary fs-6 text-justify'>
                                                        <li>
                                                            Descargar la aplicación 
                                                            <a href='https://g.co/kgs/VKn8vKm' target='_blank' className='fw-bold privacy-x-subtitle text-decoration-none mx-1'>
                                                                <FontAwesomeIcon icon={faXTwitter} className="privacy-icon-x" /> 
                                                                (<span className='privacy-twitter-subtitle'>twitter</span> <FontAwesomeIcon icon={faTwitter} className="privacy-icon-twitter" />)
                                                            </a>. 
                                                        </li>
                                                        <li>Carga y descarga de fotos en aplicaciones distintas a la oficial.</li>
                                                        <li>
                                                            Reproducción de videos y la funcionalidad para compartirlos, desde la aplicación de
                                                            <a href='https://x.com/?lang=es' target='_blank' className='fw-bold privacy-x-subtitle text-decoration-none mx-1'>
                                                                <FontAwesomeIcon icon={faXTwitter} className="privacy-icon-x" /> 
                                                                (<span className='privacy-twitter-subtitle'>twitter</span> <FontAwesomeIcon icon={faTwitter} className="privacy-icon-twitter" />)
                                                            </a>
                                                            o utilizando otras aplicaciones.
                                                        </li>
                                                        <li>
                                                            Redireccionamiento a cualquier link o URL externo a la aplicación, 
                                                            aún cuando este haya sido compartido utilizándola a través de la 
                                                            línea de tiempo o mensaje directo.
                                                        </li>
                                                        <li>Transmisión de video en tiempo real; la reproducción de video en tiempo real.</li>
                                                        <li>Compartir una ubicación, propia en vivo o seguir ubicación de cualquier contacto en vivo.</li>
                                                        <li>Cualquier otra funcionalidad no enlistada como incluida.</li>
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='pt-4'>
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start'>Malas prácticas – Prácticas Prohibidas</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Queda estrictamente prohibido hacer uso de los servicios de voz, SMS y/o datos
                                                    (incluyendo el uso de redes sociales, mensajería instantánea y/u otros servicios de tipo
                                                    OTT provistos directamente por Altán o Tuis), ofrecidos sin límite o ilimitados para
                                                    otros fines distintos a la comunicación persona a persona y/o para fines distintos a los
                                                    definidos en la oferta comercial ofrecida y contratada.
                                                </p>
                                                <div>
                                                    <p className='text-body-secondary fs-6 text-justify'>
                                                        Se considerará que el usuario incurre en una Práctica Prohibida cuando los servicios
                                                        sean utilizados:
                                                    </p>
                                                    <ul className='text-body-secondary list-style fs-6 text-justify'>
                                                        <li>
                                                            Con fines de reventa o cualquier forma de explotación comercial sin previa
                                                            autorización del Instituto Federal de Telecomunicaciones y acorde al marco
                                                            regulatorio aplicable;
                                                        </li>
                                                        <li>
                                                            Como líneas de call center y/o para envío de publicidad y/o notificaciones o
                                                            alertas masivas.
                                                        </li>
                                                        <li>
                                                            Como monitor de bebé (baby phone);
                                                        </li>
                                                        <li>
                                                            Para la provisión de servicios de telefonía y/o mensajería y/o acceso a Internet
                                                            público en cualquier tipo de establecimiento y/o en casetas públicas (por
                                                            ejemplo: casetas telefónicas, postes, puestos de revistas o flores, o pedestales,
                                                            entre otros);
                                                        </li>
                                                        <li>
                                                            Para el establecimiento de puertas de enlace de envío de comunicaciones tipo
                                                            bypass.
                                                        </li>
                                                        <li>
                                                            Para el envío de mensajes masificados de tipo spam, y/o phishing y/o análogo;
                                                        </li>
                                                        <li>
                                                            Para la transmisión o descarga de datos de forma masificada tipo Torrent y/o
                                                            similar o análogo;
                                                        </li>
                                                        <li>
                                                            Para el establecimiento de accesos a contenidos (archivos, documentos,
                                                            imágenes, fotos, audios, videos y/o combinación de éstos), de forma permanente
                                                            y/o en vivo a manera de streaming;
                                                        </li>
                                                        <li>
                                                            De cualquier forma, que degraden y/o perturben la red de Altán o degraden y/o
                                                            perturben los servicios de otros usuarios, y/o;
                                                        </li>
                                                        <li>
                                                            Para fines fraudulentos, delictivos o ilegales.
                                                        </li>
                                                        <li>
                                                            Uso anómalo de los servicios. Para los paquetes con RRSS, Voz Saliente y SMS
                                                            Saliente ilimitados, se considerará como uso anómalo, aquel uso más allá de lo
                                                            razonable conforme a los hábitos generales de uso en las condiciones
                                                            contratadas, incluyendo sin limitar, un consumo que exceda tres (3) veces la
                                                            media del consumo general de la oferta y/o producto de que se trate.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    En caso de detectarse que los Usuarios Finales del Cliente incurren en cualquiera de las
                                                    conductas sen aladas, Tuis se reserva el derecho de ejercer las acciones administrativas,
                                                    civiles y/o penales que conforme a derecho correspondan, incluyendo las
                                                    correspondientes a la reparación de daños y perjuicios ocasionados a Altán; pudiendo,
                                                    en su caso, suspender o cancelar de forma parcial, total, definitiva o temporal la
                                                    prestacio n de los servicios y/o beneficios de uso sin límite o ilimitados.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Cuando Altán o Tuis detecte alguna de las conductas mencionadas, se le notificara al
                                                    Cliente la conducta detectada y las acciones a tomarse. Tuis esperara la aclaracio n de lo
                                                    sucedido con el(los) usuario final, previo a la implementacio n efectiva de las medidas a
                                                    tomarse.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    El uso del servicio de telefoní a Tuis es para uso personal y no comercial, si cuentas con
                                                    un plan tarifario que incluye el uso de Datos ilimitados, en relación a los datos navegarás
                                                    con el mayor ancho de banda disponible (en funcio n de la tecnología instalada en la
                                                    zona de cobertura donde te encuentres y de la concentración de tráfico principalmente)
                                                    en velocidad Best Effort, hasta llegar a una cuota de gigabytes (GB) determinada por la
                                                    oferta comercial del plan tarifario o de datos que tengas contratado; En caso de que el
                                                    Usuario llegue al límite de datos en velocidad Best Effort, continuará navegando a una
                                                    velocidad reducida de 512Kbps hasta la vigencia del plan contratado.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Los datos ilimitados destinados para RRSS aplican para consumo a nivel Nacional
                                                    correrán a una velocidad Best Effort de datos del paquete principal que se haya
                                                    contratado (Cuota de Datos y Límite Máximo de Tráfico de Datos en Roaming
                                                    Internacional), es decir, una vez agotadas estas bolsas, la velocidad de las RRSS correrán
                                                    a una velocidad reducida de 512Kbps hasta la vigencia del plan contratado.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Las Condiciones generales de uso para Datos incluidos en el Límite Máximo de Tráfico
                                                    de Redes Sociales “RRSS” en Territorio Nacional y el Límite Máximo de Tráfico de RRSS
                                                    en Roaming Internacional podrán encontrarlos en nuestra
                                                    <Link to="/politica-uso-justo" className='link-conditions-tuis text-decoration-none' target='_blank'> política de uso justo</Link> para
                                                    más información sobre lo anterior.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Nuestros planes se encuentran registrados ante el Instituto Federal de
                                                    Telecomunicaciones, el cual podrás consultar en la página:
                                                    <a href="https://tarifas.ift.org.mx/ift_visor/" className='link-conditions-tuis text-decoration-none mx-1' target='_blank'>
                                                        tarifas.ift.org.mx/ift_visor/
                                                    </a>
                                                    y dentro del portal de 
                                                    <a href="http://www.tuis.com.mx/" className='link-conditions-tuis text-decoration-none mx-1' target='_blank'>
                                                        Tuis (www.tuis.com.mx) 
                                                    </a>
                                                    podrás visualizar en los apartados de
                                                    <Link to="/politica-uso-justo" className='link-conditions-tuis text-decoration-none' target='_blank'> Política de Uso Justo </Link>
                                                    para más información respecto de los mismos.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </section>
                                <section className='pt-5'>
                                    <h2 className='fw-bold conditions-title display-5 text-center text-lg-start'>Términos y Condiciones "DOBLE DE GIGAS"</h2>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        <span className='fw-bold'>Generales:</span> Con el objetivo de reconocer a nuestros Clientes, apoyar la economía
                                        individual y familiar, así como de promover el crecimiento de nuestra red de
                                        telecomunicaciones en Me xico, brindamos nuestra promoción “DOBLE DE GIGAS”.
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        <span className='fw-bold'>Zona Geográfica:</span> Dentro de toda la República Mexicana.
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        <span className='fw-bold'>Vigencia:</span> Hasta el 31 de marzo de 2025.
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        <span className='fw-bold'>Beneficio:</span> El doble de datos de navegación libre durante doce meses exclusivamente en 
                                        los Planes Mensuales de Tuis (Tuisty 5 GB ilimitados, Tuisty Prime Ilimitado, Tuisty Esencial, Tuisty 40 GB ilimitado, 
                                        Tuisty 40 GB Comparte, Tuisty 100 GB Comparte)
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        Los usuarios que realicen la portabilidad de su número desde otra compañía telefónica
                                        por primera vez deberán adquirir y/o recargar cualquiera de los planes mensuales
                                        antes mencionados y posteriormente cada vez que recarguen el plan inicial contratado
                                        recibirán el doble de datos.
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        El doble de datos solo se aplicará a la bolsa rápida (Best Effort) de datos del plan inicial
                                        contratado. No se aplicará a los datos con velocidad reducida a 512 Kbps.
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        No se otorgará el beneficio si el usuario recarga un plan diferente al inicialmente
                                        contratado.
                                    </p>
                                    <div>
                                        <p className='text-body-secondary fs-5 text-justify'>
                                            El uso de la Plataforma implica la aceptación de:
                                        </p>
                                        <ul className='text-body-secondary fs-5 list-style text-justify'>
                                            <li>
                                                El usuario debe tener un número previamente asignado por cualquier compañía
                                                telefónica en México.<span className='fw-bold'>*</span>
                                            </li>
                                            <li>
                                                El usuario debe realizar la portabilidad de su número telefónico a Tuis.
                                            </li>
                                            <li>
                                                El usuario debe contratar o recargar el Paquete Mensual de su preferencia en la
                                                página web, en la aplicación móvil o en la sucursal autorizada. Para que el
                                                beneficio sea aplicable, el plan seleccionado al momento de la portabilidad debe
                                                ser recargado por el usuario durante doce meses continuos.
                                            </li>
                                            <li>
                                                Al confirmar la orden, el método de pago y realizar el pago del plan adquirido, el
                                                usuario podrá visualizar el beneficio del doble de datos en la bolsa rápida de
                                                datos (Best Effort) dentro de la web app o aplicación móvil.
                                            </li>
                                        </ul>
                                    </div>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        <span className='fw-bold'>Notas:</span> <span className='fw-bold'>*</span>Válido con cualquiera de las compañías de telefonía y datos con excepción de las
                                        marcas de Altán.
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        El beneficio se podra ver reflejado en un plazo de 48 horas ha biles desde el momento
                                        en que se realice la portabilidad de su línea y realice la primera recarga del plan
                                        seleccionado.
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        Los planes mensuales son de prepago y no son forzosos, duran 30 días y no se pueden
                                        modificar durante ese periodo.
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        Es importante que el Usuario o Cliente verifique la compatibilidad de su dispositivo a
                                        través del Portal.
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        Esta promoción es aplicable u nicamente para usuarios nuevos que realicen recargas
                                        dentro de la aplicación móvil, en la página web y/o en los puntos de venta físicos
                                        mencionados en la página web.
                                    </p>
                                    <p className='text-body-secondary fs-5 mt-3 text-justify'>
                                        <span className='fw-bold'>Usuario Nuevo:</span> significa la persona que contrata, adquiere o realiza su portabilidad
                                        por primera vez de o a una línea telefónica a Tuis.
                                    </p>
                                    <Accordion defaultActiveKey={null} flush>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <h4 className='mt-4 fw-bold privacy-subtitle fs-4 text-center text-lg-start'>Modificaciones de “DOBLE DE GIGAS”</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Para efectos de este documento, el “Usuario” debe ser entendido como toda aquella
                                                    persona que ingrese al portal mediante un equipo de cómputo y/o de comunicación (en
                                                    adelante el Usuario), aceptando utilizar dispositivos, software, o cualquier otro medio
                                                    tendiente a interferir en perjuicio de las actividades y/o de las operaciones del Portal o
                                                    en las bases de datos y/o información que se contenga en el mismo.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Altán y/o Tuis se reservan el derecho de efectuar, en cualquier momento,
                                                    modificaciones o actualizaciones a los presentes Términos y Condiciones, ya sea como
                                                    consecuencia de reformas legislativas, políticas internas, nuevos requerimientos para
                                                    la prestación u ofrecimiento de nuestros servicios y/o productos, prácticas del mercado
                                                    u otros.
                                                </p>
                                                <p className='text-body-secondary fs-6 text-justify'>
                                                    Por todo lo anterior, el Usuario queda obligado en todo momento a cumplir los
                                                    presentes te rminos y condiciones, así como los Términos y Condiciones Generales, la
                                                    Política de Uso Justo, el Código de Prácticas Comerciales, el Aviso de Privacidad, y demás
                                                    apartados que se encuentren en la página de internet de Tuis.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </section>
                                <p className='text-body-secondary fs-6 mt-5 pt-5 text-end'>
                                    <span className='fw-bold'>Última actualización:</span> Enero 2025 
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <FooterComponent></FooterComponent>
                </>
            )}
        </>
    );
}

export default TerminosCondiciones