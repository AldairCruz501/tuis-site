import { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Button, Card } from 'react-bootstrap';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { getToken } from "./storage/SaveUser";
import { AuthLogout } from './peticiones/login';
import { useCart } from '../Context/Context';

export default function NavbarComponent() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  //const [imeiVerified, setImeiVerified] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const navigate = useNavigate()
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const user = getToken(); // Ajusta la clave según cómo guardes los datos del usuario
    setUserLoggedIn(!!user);
  }, []);

  const handleShow = () => setShowOffcanvas(true);
  const handleClose = () => setShowOffcanvas(false);

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart();

  return (
    <header className="header-color">
      {/* Navigation Bar */}
      <Navbar expand="xl" className="border-bottom border-nav py-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-block d-xl-none logo-left">
            <img
              className="logo-header"
              src="/img/Tuis-Logotipo-Blanco.png"
              alt="logo-tuis"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" className='toggle-color' />
          <div className='d-block d-xl-none'>
            <Nav.Link className='d-block fs-4 text-decoration-none text-white' onClick={handleShow}>
              <FontAwesomeIcon icon={faCartShopping} className='fs-3' />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Nav.Link>
          </div>
          <Navbar.Collapse id="navbarSupportedContent" className='m-0'>
            <div className="d-lg-flex flex-column align-items-center align-items-lg-start m-lg-auto pt-3">
              {/* Logo visible en tamaños grandes */}
              <Navbar.Brand as={Link} to="/" className=" d-none d-xl-block logo-header">
                <img
                  className="logo-header"
                  src="/img/Tuis-Logotipo-Blanco.png"
                  alt="logo-tuis"
                />
              </Navbar.Brand>

              {/* Navigation Links */}
              <Nav className="d-inline-flex pt-1 pt-md-3 pt-lg-0 mt-1">
                <Nav.Link as={Link} to="/" className="mx-2 mx-lg-3">
                  Inicio
                </Nav.Link>
                <NavDropdown
                  title={
                    <span
                      className="text-decoration-none text-white item-nav"
                      onClick={() => navigate("/paquetes")}
                      style={{ cursor: "pointer" }}
                    >
                      Paquetes
                    </span>
                  }
                  className="mx-2 mx-lg-3"
                  show={showDropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/paquetes/tuisty-basico">Tuisty Básico</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/paquetes/tuisty-mensual">Tuisty Mensual</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/paquetes/tuisty-trimestral">Tuisty Trimestral</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/paquetes/tuisty-semestral">Tuisty Semestral</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/paquetes/tuisty-anual">Tuisty Anual</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/cobertura" className="mx-2 mx-lg-3">
                  Cobertura
                </Nav.Link>
                <Nav.Link as={Link} to="/compatibilidad" className="mx-2 mx-lg-3">
                  Compatibilidad
                </Nav.Link>
                <Nav.Link as={Link} to="/nosotros" className="mx-2 mx-lg-3">
                  Nosotros
                </Nav.Link>
                <Nav.Link as={Link} to="/recargas" className="mx-2 mx-lg-3">
                  Recargas
                </Nav.Link>
                <Nav>
                  {userLoggedIn ? (
                    <Nav.Link as={Link} to="/" className="mx-2 mx-lg-3" onClick={(e) => { e.preventDefault(); AuthLogout(); }}>
                      Cerrar sesión
                    </Nav.Link>
                  ) : (
                    <Nav.Link as={Link} to="/acceder" className="mx-2 mx-lg-3">
                      Acceder
                    </Nav.Link>
                  )}
                </Nav>
                <Nav.Link className='d-none d-xl-block fs-4 text-decoration-none text-white' onClick={handleShow}>
                  <FontAwesomeIcon icon={faCartShopping} className='fs-3' />
                  {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas className='offcanvas-width' show={showOffcanvas} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fs-2 fw-bold'> Carrito {cartCount > 0 && <span className='fs-5 fw-normal'>{cartCount} producto(s)</span>}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <>
              <div className='p-3 text-center'>
                <Container className='p-2'>
                  <img
                    src="/img/carrito-vacio.png"
                    className="img-fluid rounded-3"
                    alt="carrito-vacio"
                  />
                </Container>
                <p className="fw-bold fs-5">El carrito esta vacío</p>
                <div className='pt-1'>
                  <Button className="text-uppercase mx-2 mb-1 btn-home"
                    onClick={() => {
                      navigate("/")
                      window.scrollTo(0, 0);
                    }}
                  >
                    Ir a inicio
                  </Button>
                  <Button className="text-uppercase mx-2 mb-1 btn-buy"
                    onClick={() => {
                      navigate("/paquetes")
                      window.scrollTo(0, 0);
                    }}
                  >
                    Comprar Sim
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              {cart.map((plan) => (
                <Container key={plan.id} className='p-2'>
                  <Card className='mb-3'>
                    <Card.Body className='mx-2'>
                      <div className='row mb-4 d-flex justify-content-between align-items-center'>
                        <div className='col-md-2 col-lg- col-xl-2'>
                          <img src={plan.imgPlan} alt="img-plan" className='img-tmn rounded-3 m-auto' />
                        </div>
                        <div className='col-md-3 col-lg-2 col-xl-3'>
                          <h6 className='text-muted'>{plan.dataPlan}</h6>
                          <h6 className='mb-0'>{plan.name} {plan.dataPlus} Ilimitado {plan.duration}</h6>
                        </div>
                        <div className='col-md-3 col-lg-3 col-xl-2 d-flex'>
                          <Button variant="outline-light" size="sm" onClick={() => decreaseQuantity(plan.id)} className='mx-1 fw-bold text-dark'>-</Button>{' '}
                          {plan.quantity}{' '}
                          <Button variant="outline-light" size="sm" onClick={() => increaseQuantity(plan.id)} className='mx-1 fw-bold text-dark'>+</Button>
                        </div>
                        <div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
                          <h6 className='mb-0'>${(plan.price * plan.quantity)}</h6>
                        </div>
                        <div className='col-md-1 col-lg-1 col-xl-1 text-end'>
                          <span variant="danger" size="sm" onClick={() => removeFromCart(plan.id)}>
                            <FontAwesomeIcon icon={faRectangleXmark} className='fs-3 icon-out' />
                          </span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Container>
              ))}
            </>
          )}
          {cart.length > 0 && (
            <>
              <div className="text-end">
                <h3 className="mt-2">Total: ${totalPrice.toFixed(2)}</h3>
                <div className="pt-1 pb-4">
                  <Button size="lg" className="text-uppercase btn-pay"
                    onClick={() => {
                      navigate("/carrito")
                      window.scrollTo(0, 0);
                    }}
                  >
                    Ir al carrito
                  </Button>
                </div>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}


