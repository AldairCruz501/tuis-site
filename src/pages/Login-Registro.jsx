import './Login-Registro.css'
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { AuthLogin } from "../components/peticiones/login";
import { Account } from "../components/peticiones/account";


export default function LoginRegistro () {
    const [activeTab, setActiveTab] = useState(null);
    const [loading, setLoading] = useState(true);

    //almacenar la informacion por sus estados
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [between_Streets, setBetween_Streets] = useState('');
    const [CP, setCP] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [repetPassword, setRepetPassword] = useState('');

        useEffect(() => {
          const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoading(false);
          };
    
          fetchData();
        }, []);

        // Manejar el cambio en los inputs
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            if (name === "email") {
                setEmail(value);
            } else if (name === "password") {
                setPassword(value);
            }
        };

        // Manejar el envío del formulario
        const handleSubmit = (event) => {
            event.preventDefault();
            AuthLogin(email, password);
        };

        // Manejar el cambio en los inputs en Registro
        const handleInputChangeReg = (event) => {
            const { name, value } = event.target;
            switch (name) {
              case 'firstName':
                setFirstName(value);
                break;
              case 'lastName':
                setLastName(value);
                break;
              case 'address':
                setAddress(value);
                break;
              case 'between_Streets':
                setBetween_Streets(value);
                break;
              case 'CP':
                setCP(value);
                break;
              case 'description':
                setDescription(value);
                break;
              case 'phone':
                setPhone(value);
                break;
              case 'email':
                setEmail(value);
                break;
              case 'password':
                setPassword(value);
                break;
              case 'repetPassword':
                setRepetPassword(value);
                break;
              default:
                break;
            }
          };

          // Manejar el envío del formulario en Registro
          const handleSubmitReg = (event) => {
            event.preventDefault();
            Account(firstName, lastName, address, between_Streets, CP, description, phone, email, password, repetPassword);
          };

    return (
        <>
            <Loading loading={loading} />
                {!loading && (
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
                                                <form id="FormLogin" onSubmit={handleSubmit} autoComplete="off">
                                                    <div className="mb-3" onClick={() => setActiveTab('login')}>
                                                        <label htmlFor="emailLogin" className="form-label fw-bold">
                                                            Correo electrónico
                                                        </label>
                                                        <input
                                                            className='form-control'
                                                            type="text"
                                                            name="email"
                                                            id='emailLogin'
                                                            placeholder="tuisty_elmapache@tuis.com.mx"
                                                            autoComplete="off"
                                                            value={email}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="mb-3" onClick={() => setActiveTab('login')}>
                                                        <label htmlFor="passwordLogin" className="form-label fw-bold">
                                                            Contraseña
                                                        </label>
                                                        <input
                                                            className='form-control'
                                                            type="password"
                                                            name="password"
                                                            id='passwordLogin'
                                                            placeholder="*********"
                                                            autoComplete="new-password"
                                                            value={password}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    {/*<div className='mb-4' onClick={() => setActiveTab('login')}>
                                                        <Link className='text-decoration-none ress-pass'>
                                                            ¿Olvidó su contraseña?
                                                        </Link>
                                                    </div>*/}
                                                    <button type="submit" className="btn btn-login btn-lg w-100">
                                                        Iniciar Sesión
                                                    </button>
                                                    <div className=' mt-3 mb-1 text-center'>
                                                        ¿Todavía no estás registrado? <Link onClick={() => setActiveTab('register')}  className='text-decoration-none ress-pass fw-bold'>Registarse</Link>
                                                    </div>
                                                </form>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="register" active={activeTab === 'register'}>
                                                <h4 className='text-center fw-bold fs-1'>Registro</h4>
                                                <form onSubmit={handleSubmitReg} autoComplete="off">
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="nameRegister" className="form-label fw-bold">
                                                                    Nombre(s)
                                                                </label>
                                                                <input className="form-control" type="text" name="firstName" id='nameRegister' placeholder="Tuisty" autoComplete="off" value={firstName} onChange={handleInputChangeReg}/>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="lastNameRegister" className="form-label fw-bold">
                                                                    Apellidos
                                                                </label>
                                                                <input className="form-control" type="text" name="lastName" id='lastNameRegister' placeholder="Mapache Inbtel" autoComplete="off" value={lastName} onChange={handleInputChangeReg}/>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12}>
                                                            <div className="mb-3">
                                                                <label htmlFor="adressRegister" className="form-label fw-bold">
                                                                    Dirección (incluya la colonia)
                                                                </label>
                                                                <input className="form-control" type="text" name="address" id='adressRegister' placeholder="Encino 204 Col. Bosque Bonito" autoComplete="off" value={address} onChange={handleInputChangeReg}/>
                                                            </div>
                                                        </Col>
                                                        <Col sm={6} lg={8}>
                                                            <div className="mb-3">
                                                                <label htmlFor="betweenStreetsRegister" className="form-label fw-bold">
                                                                    Entre Calles
                                                                </label>
                                                                <input className="form-control" type="text" name="between_Streets" id='betweenStreetsRegister' placeholder="Entre Calle Pino y Cedro" autoComplete="off" value={between_Streets} onChange={handleInputChangeReg}/>
                                                            </div>
                                                        </Col>
                                                        <Col sm={6} lg={4}>
                                                            <div className="mb-3">
                                                                <label htmlFor="cpRegister" className="form-label fw-bold">
                                                                    Código Postal
                                                                </label>
                                                                <input className="form-control" type="text" name="CP" id='cpRegister' placeholder="12345" autoComplete="off" value={CP} onChange={handleInputChangeReg}/>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div className="mb-3">
                                                                <label htmlFor="refRegister" className="form-label fw-bold">
                                                                    Referencias de su domicilio
                                                                </label>
                                                                <textarea className="form-control" cols="10" type="text" name="description" id='refRegister' placeholder="En frente de la tienda del señor Búho" autoComplete="off" value={description} onChange={handleInputChangeReg}></textarea>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12}>
                                                            <div className="mb-3">
                                                                <label htmlFor="telRegister" className="form-label fw-bold">
                                                                    Telefono
                                                                </label>
                                                                <input className="form-control" type="number" name="phone" id='telRegister' placeholder="1234567890" autoComplete="off" value={phone} onChange={handleInputChangeReg}/>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12}>
                                                            <div className="mb-3">
                                                                <label htmlFor="emailRegister" className="form-label fw-bold">
                                                                    Correo electrónico
                                                                </label>
                                                                <input className="form-control" type="text" name="email" id='emailRegister' placeholder="tuisty_elmapache@tuis.com.mx" autoComplete="off" value={email} onChange={handleInputChangeReg}/>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="passwordRegister" className="form-label fw-bold">
                                                                    Contraseña
                                                                </label>
                                                                <input className="form-control" type="password" name="password" id='passwordRegister' placeholder="**********" autoComplete="new-password" value={password} onChange={handleInputChangeReg}/>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="confPasswordRegister" className="form-label fw-bold">
                                                                    Confirmar Contraseña
                                                                </label>
                                                                <input className="form-control" type="password" name="repetPassword" id='confPasswordRegister' placeholder="**********" autoComplete="new-password" value={repetPassword} onChange={handleInputChangeReg}/>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <button type="submit" className="btn btn-register btn-lg w-100">
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
            )}
        </>
    );
}