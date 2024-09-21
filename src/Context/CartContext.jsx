import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ( props ) => {
  const [cart, setCart] = useState([]);

    localStorage.setItem('cart', JSON.stringify(cart));

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;