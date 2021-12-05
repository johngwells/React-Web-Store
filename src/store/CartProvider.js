import { useState } from 'react';

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartState, setCartState] = useState(0);

  const addItemToCartHandler = () => {
    setCartState(cartState + 1)
  }

  const cartContext = {
    cart: cartState,
    addItem: addItemToCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
