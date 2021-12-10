import { useReducer } from "react";

import CartContext from "./cart-context";

const initialState = {
  id: null,
  price: 0,
  count: 0,
}

function reducer(state, action) {
  if (action.type === 'ADD') {
    return {
      ...state,
      id: action.payload.id,
      price: action.payload.price,
      count: state.count + 1
    }
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      count: state.count < 0 ? 0 : state.count--
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
  
  const cartContext = {
    cart: state,
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
