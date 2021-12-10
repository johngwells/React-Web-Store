import { useReducer } from "react";

import CartContext from "./cart-context";

const initialState = {
  cartItems: [],
}

function reducer(state, action) {
  if (action.type === 'ADD') {
    console.log(state)

    return {
      ...state,
      cartItems: [...state.cartItems, {...action.payload}],
    }
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
      // count: state.count < 0 ? 0 : state.count--
    }
  }

  if (action.type === 'RESET') {
    return {
      ...state,
      cartItems: []
    }
  }

  return state;
}

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatch({type: 'ADD', payload: item});
  }

  const removeItemToCartHandler = (item) => {
    dispatch({type: 'REMOVE', payload: item});
  }

  const resetCartHandler = (item) => {
    dispatch({type: 'RESET', payload: item});
  }
  
  
  const cartContext = {
    cart: state,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    reset: resetCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
