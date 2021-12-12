import { useReducer } from "react";

import CartContext from "./cart-context";

const initialState = {
  cartItems: []
};

function reducer(state, action) {
  if (action.type === "ADD") {
    console.log(state);

    return {
      ...state,
      cartItems: [...state.cartItems, { ...action.payload, quantity: 1}]
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
    };
  }

  if (action.type === "RESET") {
    return {
      ...state,
      cartItems: []
    };
  }

  return state;
}

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddItemToCart = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const handleRemoveItemToCart = (item) => {
    dispatch({ type: "REMOVE", payload: item });
  };

  const resetCart = (item) => {
    dispatch({ type: "RESET", payload: item });
  };

  const cartContext = {
    cart: state,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemToCart,
    reset: resetCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
