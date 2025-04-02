import './AppStoreTuis.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const AppStoreTuis = () => {
    return (
      <section className='tuisty-container-app p-4 pt-5 text-white'>
        <Container>
          <Row>
            <Col lg={6} className='mt-5'>
              <h3 className='display-3 fw-bold'>Descarga Nuestra <span className='fw-bold text-app'>App</span></h3>
              <div className='pt-3 pb-0 pb-md-2'>
                <ul className='fs-4 list-unstyled'>
                    <li><FontAwesomeIcon icon={faCircleCheck} className="fs-4 text-app"/> Recarga tu plan</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} className="fs-4 text-app"/> Consulta de Saldo</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} className="fs-4 text-app"/> Visualiza tu plan</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} className="fs-4 text-app"/> Agrega un número</li>
                </ul>
              </div>
              <div className='mt-5 d-flex pb-4'>
                <div className='m-auto w-50'>
                    <a href="https://play.google.com/store/apps/details?id=io.ionic.inbtel&hl=es_MX" target='_blank' className='m-0 p-0'>
                        <img src="/img/google-play-badge.png" alt="" className='img-fluid me-3' loading="lazy" />
                    </a>
                </div>
                <div className='m-auto w-50'>
                    <a href="https://apps.apple.com/mx/app/inbtel-movil/id6478967808" target='_blank'>
                        <img src="/img/Apple-App-Store-Logo.png" alt="" className='img-fluid mx-3' loading="lazy" />
                    </a>
                </div>
              </div>
            </Col>
            <Col lg={6} className='pb-3'>
            <Fade>
                <div className='m-auto w-75'>
                    <img
                    src="/img/App-Tuis.png"
                    alt="Mapache-Delivery"
                    className="img-fluid"
                    loading="lazy"
                    />
                </div>
            </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default AppStoreTuis
