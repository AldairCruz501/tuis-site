import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import NavbarComponent from "../../components/Navbar";
import FooterComponent from "../../components/Footer";
import FloatingWhatsAppButton from "../../components/WhatsApp-Button";
import Swal from "sweetalert2";
import { getToken } from '../../components/storage/SaveUser';
import { loadStripe } from '@stripe/stripe-js';
import "./recargas.css";

export function Recargas() {
    const [showModal, setShowModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const plans = [
        { id: 1, name: "Recarga $50", price: 50, description: "Incluye 2GB de datos y llamadas ilimitadas.", popular: false },
        { id: 2, name: "Recarga $100", price: 100, description: "Incluye 5GB de datos y llamadas ilimitadas.", popular: true },
    ];

    const openModal = (plan) => {
        setSelectedPlan(plan);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedPlan(null);
        setPhone("");
        setEmail("");
    };

    const handleConfirmPurchase = () => {
        if (!phone || !email) {
            Swal.fire("Error", "Por favor, ingresa un número de teléfono y un correo electrónico válidos.", "error");
            return;
        }

        Swal.fire({
            title: `¿Confirmar compra de ${selectedPlan.name}?`,
            html: `Número: ${phone} <br> Correo electrónico: ${email}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, comprar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                makePayment();
            }
        });
    };

    const makePayment = async () => {
        const token = getToken();
        const stripe = await loadStripe("pk_test_51Qn3cLQWugqDHVyU7OIqQ8T0JMU3fcVmuZ63JUJCMK3p2Tjc17QbyCyPe7JPyUNpU2xj3IrRuZ620VE03ptcpZyo00wuwgJ8Mg");

        const body = {
            products: [{
                name: selectedPlan.name,
                price: selectedPlan.price * 100,
                quantity: 1
            }],
            phone: phone,
            email: email,
            type: 2
        };

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };

        try {
            const response = await fetch("/create-checkout-session", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error("Error al crear la sesión de pago");
            }

            const session = await response.json();
            const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) {
                console.error(result.error);
            }
        } catch (error) {
            console.error("Error en la solicitud de pago:", error);
            Swal.fire("Error", "Hubo un problema con el pago. Inténtalo nuevamente.", "error");
        }
    };

    return (
        <>
            <NavbarComponent />
            <main className="container py-4">
                <h1 className="title-recargas text-center mb-4 fw-bold display-1 mb-5">Planes de Recarga</h1>
                <div className="row justify-content-center">
                    {plans.map((plan) => (
                        <div key={plan.id} className="mb-4 col-md-4">
                            <div className="card-sl">
                                <div className="card-image">
                                    <img src="img/esencial-idea.png" className="m-auto" alt={plan.name} />
                                </div>
                                <div className="card-heading fs-2 fw-bold p-2">{plan.name}</div>
                                <div className="card-text">{plan.description}</div>
                                <div className="card-text fs-2 fw-bold">${plan.price} MXN</div>
                                <button className="card-button fs-4 fw-bold" onClick={() => openModal(plan)}>
                                    Comprar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Modal show={showModal} onHide={closeModal} centered>
                <Modal.Header closeButton className="border-bottom-0">
                    <img src="img/esencial-idea.png"
                        alt={selectedPlan?.name}
                        className="position-absolute top-0 start-50 translate-middle"
                        style={{ width: "100px", height: "100px" }} 
                    />
                </Modal.Header>
                <div className="modal-content border-0 w-75 mx-auto text-center">
                    <div className="modal-body p-3 border-0">
                        <Modal.Title className="mb-3 fs-2 fw-bold card-heading">{selectedPlan?.name}</Modal.Title>
                        <p>{selectedPlan?.description}</p>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Ingresa tu número de teléfono</Form.Label>
                                <Form.Control
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="123456789"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ingresa tu correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tuisty_elmapache@tuis.com.mx"
                                    required
                                />
                            </Form.Group>
                            <Button className="modal-btn-shop" type="button" onClick={handleConfirmPurchase}>
                                Comprar
                            </Button>
                        </Form>
                    </div>
                </div>
            </Modal>

            <FloatingWhatsAppButton />
            <FooterComponent />
        </>
    );
}
