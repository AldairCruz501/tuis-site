import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import FooterComponent from '../../components/Footer';
import NavbarComponent from '../../components/Navbar';
import { useCart } from '../../Context/Context';
import './Carrito.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpAZ, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import FloatingWhatsAppButton from '../../components/WhatsApp-Button';
import { useState } from 'react';
import { stripeRedirect } from '../../components/peticiones/stripe';
import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';
import { getToken } from '../../components/storage/SaveUser';

const Carrito = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    Swal.fire({
      title: `¿Estás seguro que deseas proceder con la compra? `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
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
      products: cart.map(plan => ({
        name: ` ${plan.name} ${plan.name} ${plan.dataPlus} Ilimitado ${plan.duration}`,
        image: plan.imgPlan,
        price: plan.price * 100,
        quantity: plan.quantity
      })),
      type: 1
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,

    };

    try {
      const response = await fetch(`/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error("Error al crear la sesión de pago");
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

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
      <Container>
        {cart.length === 0 ? (
          <>
            <div className="p-5 rounded-3 text-center">
              <Container className="py-5">
                <img
                  src="/img/carrito-vacio.png"
                  className="img-fluid rounded-3"
                  alt="carrito-vacio"
                  loading="lazy"
                />
              </Container>
              <p className="fw-bold fs-5">El carrito esta vacío</p>
              <div className="pt-1">
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
            <Table striped bordered hover responsive className="mt-5 mb-4">
              <thead>
                <tr>
                  <th></th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((plan, id) => (
                  <tr key={id}>
                    <td className="text-center m-0"><img src={plan.imgPlan} alt="img-plan" className="img-plan" loading="lazy" /></td>
                    {/* name plan */}
                    <td>{plan.name} {plan.dataPlus} Ilimitado {plan.duration}</td>
                    {/* price plan */}
                    <td>${plan.price.toFixed(2)}</td>
                    <td>
                      <Button variant="outline-secondary" size="sm" onClick={() => decreaseQuantity(plan.id)}>-</Button>{' '}
                      {plan.quantity}{' '}
                      <Button variant="outline-secondary" size="sm" onClick={() => increaseQuantity(plan.id)}>+</Button>
                    </td>
                    <td>${(plan.price * plan.quantity).toFixed(2)}</td>
                    <td className="text-center m-0">
                      <span variant="danger" size="sm" onClick={() => removeFromCart(plan.id)}>
                        <FontAwesomeIcon icon={faRectangleXmark} className='fs-3 icon-out' />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Container>
              <div className="pt-1">
                <Button className="text-uppercase mx-2 btn-home"
                  onClick={() => {
                    navigate("/")
                    window.scrollTo(0, 0);
                  }}
                >
                  Ir a inicio
                </Button>
                <Button className="text-uppercase mx-2 btn-buy"
                  onClick={() => {
                    navigate("/paquetes")
                    window.scrollTo(0, 0);
                  }}
                >
                  Seguir Comprando
                </Button>
              </div>
            </Container>
          </>
        )}
        {/* pagar cuenta  */}
        {cart.length > 0 && (
          <>
            <div className="text-end">
              <h3 className="mt-2">Total: ${totalPrice.toFixed(2)}</h3>
              <div className="pt-1 pb-4">
                <Button size="lg" className="text-uppercase btn-pay"
                  onClick={handleConfirmPurchase}
                >
                  Pagar
                </Button>
              </div>
            </div>
          </>
        )}
      </Container>
      <FloatingWhatsAppButton />
      <FooterComponent />
    </>
  );
};

export default Carrito;
