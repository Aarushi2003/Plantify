import React, { createContext, useContext, useState } from 'react';
import data from './data';
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [products, setProducts] = useState(data); // Initialize with empty or fetched data

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
}
