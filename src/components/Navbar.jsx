import { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { getToken } from "./storage/SaveUser";
import { AuthLogout } from './peticiones/login';

export default function NavbarComponent() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const navigate = useNavigate()
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const user = getToken(); // Ajusta la clave según cómo guardes los datos del usuario
    setUserLoggedIn(!!user);
  }, []);


  return (
    <header className="header-color">
      {/* Navigation Bar */}
      <Navbar expand="lg" className="border-bottom border-nav py-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-block d-lg-none logo-left">
            <img
              className="logo-header"
              src="/img/Tuis-Logotipo-Blanco.png"
              alt="logo-tuis"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" className='toggle-color'/>
          <Navbar.Collapse id="navbarSupportedContent">
            <div className="d-lg-flex flex-column align-items-center align-items-lg-start m-lg-auto pt-3">
              {/* Logo visible en tamaños grandes */}
              <Navbar.Brand as={Link} to="/" className=" d-none d-lg-block logo-header">
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
                  <NavDropdown.Item as={Link} to="/paquetes/paquetes-basicos">Paquetes Básicos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/paquetes/paquetes-tuisty">Paquetes Tuisty</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/paquetes/paquetes-trimestrales">Paquetes Trimestrales</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/paquetes/paquetes-semestrales">Paquetes Semestrales</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/paquetes/paquetes-anuales">Paquetes Anuales</NavDropdown.Item>
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
                {/*<Nav.Link as={Link} to="/" className='d-block fs-4 text-decoration-none text-white'>
                <FontAwesomeIcon  icon={faCartShopping}/>
                </Nav.Link>*/}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}


