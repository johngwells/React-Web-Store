import React from "react";

const CartContext = React.createContext({
  cart: 0,
  addItem: () => {},
});

export default CartContext;
