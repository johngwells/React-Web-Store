import { useCallback, useEffect, useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartState, setCartState] = useState([]);
  const [cartCount, setCartCount] = useState(0);


  const addItemToCartHandler = (item) => {
    setCartState({
      id: item.id,
      price: item.price,
      count: cartCount + 1
    })
    setCartCount(cartCount + 1)
  };

  const removeItemToCartHandler = (item) => {
    if (cartCount === 0) {
      return;
    }
    setCartCount(cartCount - 1);
    
    setCartState(prev => ({
      id: item.id,
      price: item.price,
      count: prev.count === 0 ? 0 : prev.count -1
    }))
  };
  
  const cartContext = {
    cart: cartState,
    cartCount: cartCount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
