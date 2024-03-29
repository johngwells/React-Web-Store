import { useReducer } from "react";

import CartContext from "./cart-context";

const initialState = {
  cartItems: []
};

function reducer(state, action) {
  if (action.type === "ADD") {
    // see if the item exist at the index
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );

    // after finding the index, exisitngCartItem will be that existing item index
    const existingCartItem = state.cartItems[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity++
      };

      // copy exisiting items in cart to a new array
      updatedItems = [...state.cartItems];
      // take the updatedItems Index & overwrite to the new updatedItem
      updatedItems[existingCartItemIndex] = updatedItem;
      console.log(updatedItems);
    } else {
      console.log("first Add to cart fired");
      updatedItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
    }

    // (Later) Add total amount if multiple quanity

    return {
      cartItems: updatedItems
    };

    // return {
    //   ...state,
    //   cartItems: [...state.cartItems, { ...action.payload, quantity: 1}]
    // };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cartItems: [
        ...state.cartItems.filter((item) => item.id !== action.payload.id)
      ]
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
