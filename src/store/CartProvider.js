import { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartState, setCartState] = [];
  const [cartCount, setCartCount] = useState(0);

  const addItemToCartHandler = () => {
    setCartCount(cartCount + 1);
  };

  const removeItemToCartHandler = () => {
    if (cartCount === 0) {
      return;
    }
    setCartCount(cartCount - 1);
  };

  const addDataToCartHandler = (item) => {
    console.log(item);
  };

  const cartContext = {
    cart: cartState,
    cartCount: cartCount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    addData: addDataToCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
