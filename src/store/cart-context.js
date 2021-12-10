import React from "react";

const CartContext = React.createContext({
  cart: [],
  addItem: (item) => {},
  removeItem: (item) => {}
});

export default CartContext;
