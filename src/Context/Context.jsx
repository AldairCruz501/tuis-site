import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Intenta cargar los datos del carrito desde localStorage al inicio
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar los datos del carrito en localStorage cada vez que el carrito cambie
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (plan) => {
    const planInCart = cart.find(item => item.id === plan.id);
    if (planInCart) {
      setCart(cart.map(item =>
        item.id === plan.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...plan, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(plan => plan.id !== id);
    setCart(updatedCart);
  
    // Actualiza localStorage después de eliminar el item
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id) => {
    setCart(cart.map(plan =>
      plan.id === id ? { ...plan, quantity: plan.quantity + 1 } : plan
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(plan =>
      plan.id === id && plan.quantity > 1 ? { ...plan, quantity: plan.quantity - 1 } : plan
    ));
  };

  const totalPrice = cart.reduce((total, plan) => total + plan.price * plan.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
