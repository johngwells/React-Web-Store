import React from "react";

const CartContext = React.createContext({
  cart: [],
  cartCount: 0,
  addItem: () => {},
  removeItem: () => {},
  addData: (item) => {}
});

export default CartContext;
