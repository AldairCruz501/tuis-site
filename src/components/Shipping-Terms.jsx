import { Container, Row, Col, Button } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';
import './Shipping-Terms.css';


const ShippingTerms = () => {
    return (
      <section className='tuisty-container-blue p-4 pt-5 text-white'>
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className='fs-4 fw-bold'>Recibe tu SIM directamente en la <br className='d-none d-md-block'/> puerta de tu casa<span className='fw-bold'>*</span></h3>
              <p className='fs-5 pt-2'>Tiempo de entrega de 2 a 5 días hábiles</p>
              <p className='fs-5 pt-2'>Métodos de pago:</p>
              <div className='pt-2 pb-2'>
              <img
                src="/img/metodos-de-pago.png"
                alt="Metodos-de-pago"
                className="img-fluid w-50"
              />
              </div>
              <Button 
                className="buy-button border border-3 fs-5 text-uppercase fw-bold fst-italic p-3 rounded-pill"
                href='https://wa.link/8ixi0l' target='_blank'
              >
                Consulta otros envíos
              </Button>
            </Col>
            <Col lg={6}>
            <Slide direction="right">
              <img
                  src="/img/mapache-delivery.png"
                  alt="Mapache-Delivery"
                  className="img-fluid pt-3 pt-md-0"
                />
            </Slide>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default ShippingTerms