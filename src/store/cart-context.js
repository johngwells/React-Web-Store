import React from "react";

const CartContext = React.createContext({
  cart: [],
  cartCount: 0,
  addItem: (item) => {},
  removeItem: (item) => {}
});

export default CartContext;
