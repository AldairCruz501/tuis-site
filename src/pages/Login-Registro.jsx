import './Login-Registro.css'
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginRegistro () {
    const [activeTab, setActiveTab] = useState(null);

    return (
        <>
            <NavbarComponent/>
            <section className='position-relative text-center hero-login'>
                <Container className='col-md-6 p-lg-5 mx-auto my-auto'>
                    <div className='pt-5 mt-0 mt-lg-5'>
                        <h1 className='display-1 fw-bold text-uppercase text-white pt-5 mt-5'>Bienvenido</h1>
                    </div>
                </Container>
            </section>
            <section className={`tuisty-divider ${activeTab === 'register' ? 'tuisty-divider-expanded' : ''}`}></section>
            <Container className={`mt-4 mb-4 p-4 tuisty-login ${activeTab === 'register' ? 'tuisty-login-expanded' : ''}`}>
                <Row>
                    <Col md={3} className="d-flex align-items-center">
                        <img
                            src="/img/Tuisty.png"
                            alt="tuisty-login"
                            className="img-fluid"
                        />
                    </Col>
                    <Col md={6}>
                        <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
                            <Nav variant="tabs" className='border-1 pb-0'>
                                <Nav.Item>
                                    <Nav.Link 
                                        eventKey="login" 
                                        className={`nav-link-login mx-1 ${activeTab === 'login' || activeTab === null || activeTab === 'register' ? 'bg-link-login' : ''}`} 
                                        onClick={() => setActiveTab('login')}
                                    >
                                        Iniciar Sesión
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link 
                                        eventKey="register" 
                                        className={`nav-link-register mx-auto ${activeTab === 'register' || activeTab === null || activeTab === 'login'  ? 'bg-link-register' : ''}`} 
                                        onClick={() => setActiveTab('register')}
                                    >
                                        Registro
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content 
                                className={`mt-1 p-3 rounded bg-normal ${
                                    activeTab === "login"
                                    ? "bg-login text-log "
                                    : activeTab === "register"
                                    ? "bg-register"
                                    : ""
                                }`}
                            >
                                <Tab.Pane eventKey="login" active={activeTab === 'login' || activeTab === null }>
                                    <h4 className='text-center fw-bold fs-1 ' onClick={() => setActiveTab('login')}>Iniciar Sesión</h4>
                                    <form>
                                        <div className="mb-3" onClick={() => setActiveTab('login')}>
                                            <label htmlFor="emailLogin" className="form-label fw-bold">
                                                Correo electrónico
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="emailLogin"
                                            />
                                        </div>
                                        <div className="mb-3" onClick={() => setActiveTab('login')}>
                                            <label htmlFor="passwordLogin" className="form-label fw-bold">
                                                Contraseña
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="passwordLogin"
                                            />
                                        </div>
                                        <div className='mb-4' onClick={() => setActiveTab('login')}>
                                            <Link className='text-decoration-none ress-pass'>
                                                ¿Olvidó su contraseña?
                                            </Link>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg w-100">
                                            Ingresar
                                        </button>
                                        <div className=' mt-3 mb-1 text-center'>
                                            ¿Todavía no estás registrado? <Link onClick={() => setActiveTab('register')}  className='text-decoration-none ress-pass fw-bold'>Registarse</Link>
                                        </div>
                                    </form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="register" active={activeTab === 'register'}>
                                    <h4 className='text-center fw-bold fs-1'>Registro</h4>
                                    <form>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="nameRegister" className="form-label fw-bold">
                                                        Nombre
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nameRegister"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="telRegister" className="form-label fw-bold">
                                                        Telefono
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="telRegister"
                                                    />
                                                </div>
                                            </Col>
                                            <Col sm={12}>
                                                <div className="mb-3">
                                                    <label htmlFor="emailRegister" className="form-label fw-bold">
                                                        Correo electrónico
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="emailRegister"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="passwordRegister" className="form-label fw-bold">
                                                        Contraseña
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="passwordRegister"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="passwordRegister" className="form-label fw-bold">
                                                        Confirmar Contraseña
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="passwordRegister"
                                                    />
                                                </div>
                                            </Col>
                                            <Col sm={12}>
                                                <div className="mb-3">
                                                    <label htmlFor="adressRegister" className="form-label fw-bold">
                                                        Dirección
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="adressRegister"
                                                    />
                                                </div>
                                            </Col>
                                            <Col sm={6} lg={8}>
                                                <div className="mb-3">
                                                    <label htmlFor="colonyRegister" className="form-label fw-bold">
                                                        Colonia
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="colonyRegister"
                                                    />
                                                </div>
                                            </Col>
                                            <Col sm={6} lg={4}>
                                                <div className="mb-3">
                                                    <label htmlFor="cpRegister" className="form-label fw-bold">
                                                        Código Postal
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cpRegister"
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="cityRegister" className="form-label fw-bold">
                                                        Ciudad
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cityRegister"
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="stateRegister" className="form-label fw-bold">
                                                        Estado
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="stateRegister"
                                                    />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="mb-3">
                                                    <label htmlFor="refRegister" className="form-label fw-bold">
                                                        Referencias de su domicilio
                                                    </label>
                                                    <textarea className="form-control" name="" id="refRegister" cols="30"></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                        <button type="submit" className="btn btn-primary btn-lg w-100">
                                            Registrarse
                                        </button>
                                        <div className=' mt-3 mb-1 text-center'>
                                            ¿Ya estás registrado? <Link onClick={() => setActiveTab('login')}  className='text-decoration-none ress-log fw-bold'>Inicia Sesión</Link>
                                        </div>
                                    </form>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                    <Col md={3} className="d-flex align-items-center">
                        <img
                            src="/img/Tuisty.png"
                            alt="tuisty-register"
                            className="img-fluid rounded"
                        />
                    </Col>
                </Row>
            </Container>
            <FooterComponent/>
        </>
    );
}