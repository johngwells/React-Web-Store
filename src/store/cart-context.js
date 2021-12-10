import React from "react";

const CartContext = React.createContext({
  cart: [],
  addItem: (item) => {},
  removeItem: (item) => {},
  reset: () => {}
});

export default CartContext;
