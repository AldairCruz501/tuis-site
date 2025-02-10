import './Login-Registro.css'
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { Col, Container, Nav, Row, Tab, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { AuthLogin } from "../components/peticiones/login";
import { Account } from "../components/peticiones/account";
import FloatingWhatsAppButton from '../components/WhatsApp-Button';

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
    const [validatedLogin, setValidatedLogin] = useState(false);
    const [validatedReg, setValidatedReg] = useState(false);

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

    // Manejar el envío del formulario de login
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            AuthLogin(email, password);
        }
        setValidatedLogin(true);
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
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            Account(firstName, lastName, address, between_Streets, CP, description, phone, email, password, repetPassword);
        }
        setValidatedReg(true);
    };

    return (
        <>
            <Loading loading={loading} />
            {!loading && (
                <>
                    <NavbarComponent />
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
                                <img src="/img/Tuisty.png" alt="tuisty-login" className="img-fluid" />
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
                                        className={`mt-1 p-3 rounded bg-normal ${activeTab === "login" ? "bg-login text-log" : activeTab === "register" ? "bg-register" : ""}`}
                                    >
                                        <Tab.Pane eventKey="login" active={activeTab === 'login' || activeTab === null }>
                                            <h4 className='text-center fw-bold fs-1' onClick={() => setActiveTab('login')}>Iniciar Sesión</h4>
                                            <form id="FormLogin" onSubmit={handleSubmit} noValidate autoComplete="off">
                                                <Form.Group className="mb-3" controlId="emailLogin">
                                                    <Form.Label className="fw-bold">Correo electrónico</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        name="email" 
                                                        placeholder="tuisty_elmapache@tuis.com.mx" 
                                                        autoComplete="off" 
                                                        value={email} 
                                                        onChange={handleInputChange} 
                                                        required 
                                                        isInvalid={validatedLogin && !email}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Por favor, ingrese un correo electrónico válido.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="passwordLogin">
                                                    <Form.Label className="fw-bold">Contraseña</Form.Label>
                                                    <Form.Control 
                                                        type="password" 
                                                        name="password" 
                                                        placeholder="*********" 
                                                        autoComplete="new-password" 
                                                        value={password} 
                                                        onChange={handleInputChange} 
                                                        required 
                                                        isInvalid={validatedLogin && !password}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        La contraseña es obligatoria.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Button type="submit" className="btn btn-login btn-lg w-100">
                                                    Iniciar Sesión
                                                </Button>
                                                <div className='mt-3 mb-1 text-center'>
                                                    ¿Todavía no estás registrado? <Link onClick={() => setActiveTab('register')} className='text-decoration-none ress-pass fw-bold'>Regístrate</Link>
                                                </div>
                                            </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="register" active={activeTab === 'register'}>
                                            <h4 className='text-center fw-bold fs-1'>Registro</h4>
                                            <form onSubmit={handleSubmitReg} noValidate autoComplete="off">
                                                <Row>
                                                    <Col lg={6}>
                                                        <Form.Group className="mb-3" controlId="nameRegister">
                                                            <Form.Label className="fw-bold">Nombre(s)</Form.Label>
                                                            <Form.Control 
                                                                type="text" 
                                                                name="firstName" 
                                                                placeholder="Tuisty" 
                                                                value={firstName} 
                                                                onChange={handleInputChangeReg} 
                                                                required 
                                                                isInvalid={validatedReg && !firstName}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                El nombre es obligatorio.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group className="mb-3" controlId="lastNameRegister">
                                                            <Form.Label className="fw-bold">Apellidos</Form.Label>
                                                            <Form.Control 
                                                                type="text" 
                                                                name="lastName" 
                                                                placeholder="Mapache Inbtel" 
                                                                value={lastName} 
                                                                onChange={handleInputChangeReg} 
                                                                required 
                                                                isInvalid={validatedReg && !lastName}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Los apellidos son obligatorios.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <Form.Group className="mb-3" controlId="adressRegister">
                                                            <Form.Label className="fw-bold">Dirección (incluya la colonia)</Form.Label>
                                                            <Form.Control 
                                                                type="text" 
                                                                name="address" 
                                                                placeholder="Encino 204 Col. Bosque Bonito" 
                                                                value={address} 
                                                                onChange={handleInputChangeReg} 
                                                                required 
                                                                isInvalid={validatedReg && !address}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                La dirección es obligatoria.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={6} lg={8}>
                                                        <Form.Group className="mb-3" controlId="betweenStreetsRegister">
                                                            <Form.Label className="fw-bold">Entre Calles</Form.Label>
                                                            <Form.Control 
                                                                type="text" 
                                                                name="between_Streets" 
                                                                placeholder="Entre Calle Pino y Cedro" 
                                                                value={between_Streets} 
                                                                onChange={handleInputChangeReg} 
                                                                required 
                                                                isInvalid={validatedReg && !between_Streets}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                El campo de entre calles es obligatorio.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={6} lg={4}>
                                                        <Form.Group className="mb-3" controlId="cpRegister">
                                                            <Form.Label className="fw-bold">Código Postal</Form.Label>
                                                            <Form.Control 
                                                                type="text" 
                                                                name="CP" 
                                                                placeholder="12345" 
                                                                value={CP} 
                                                                onChange={handleInputChangeReg} 
                                                                required 
                                                                isInvalid={validatedReg && !CP}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                El código postal es obligatorio.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId="refRegister">
                                                            <Form.Label className="fw-bold">Referencias de su domicilio</Form.Label>
                                                            <Form.Control 
                                                                as="textarea" 
                                                                rows={3} 
                                                                name="description" 
                                                                placeholder="En frente de la tienda del señor Búho" 
                                                                value={description} 
                                                                onChange={handleInputChangeReg} 
                                                                required 
                                                                isInvalid={validatedReg && !description}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Las referencias son obligatorias.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <Form.Group className="mb-3" controlId="telRegister">
                                                            <Form.Label className="fw-bold">Teléfono</Form.Label>
                                                            <Form.Control 
                                                                type="number" 
                                                                name="phone" 
                                                                placeholder="1234567890" 
                                                                value={phone} 
                                                                onChange={handleInputChangeReg} 
                                                                required 
                                                                isInvalid={validatedReg && !phone}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                El teléfono es obligatorio.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <Form.Group className="mb-3" controlId="emailRegister">
                                                            <Form.Label className="fw-bold">Correo electrónico</Form.Label>
                                                            <Form.Control 
                                                                type="text" 
                                                                name="email" 
                                                                placeholder="tuisty_elmapache@tuis.com.mx" 
                                                                value={email} 
                                                                onChange={handleInputChangeReg} 
                                                                required 
                                                                isInvalid={validatedReg && !email}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                El correo electrónico es obligatorio.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group className="mb-3" controlId="passwordRegister">
                                                            <Form.Label className="fw-bold">Contraseña</Form.Label>
                                                            <Form.Control 
                                                                type="password" 
                                                                name="password" 
                                                                placeholder="**********" 
                                                                value={password} 
                                                                onChange={handleInputChangeReg} 
                                                                required 
                                                                isInvalid={validatedReg && !password}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                La contraseña es obligatoria.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group className="mb-3" controlId="confPasswordRegister">
                                                            <Form.Label className="fw-bold">Confirmar Contraseña</Form.Label>
                                                            <Form.Control 
                                                                type="password" 
                                                                name="repetPassword" 
                                                                placeholder="**********" 
                                                                value={repetPassword} 
                                                                onChange={handleInputChangeReg} 
                                                                required 
                                                                isInvalid={validatedReg && repetPassword !== password}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Las contraseñas no coinciden.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Button type="submit" className="btn btn-register btn-lg w-100">
                                                    Registrarse
                                                </Button>
                                                <div className=' mt-3 mb-1 text-center'>
                                                    ¿Ya estás registrado? <Link onClick={() => setActiveTab('login')} className='text-decoration-none ress-log fw-bold'>Inicia Sesión</Link>
                                                </div>
                                            </form>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Col>
                            <Col md={3} className="d-flex align-items-center">
                                <img src="/img/Tuisty.png" alt="tuisty-register" className="img-fluid rounded" />
                            </Col>
                        </Row>
                    </Container>
                    <FloatingWhatsAppButton/>
                    <FooterComponent />
                </>
            )}
        </>
    );
}
