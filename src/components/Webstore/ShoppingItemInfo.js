import { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./ShoppingItemInfo.module.css";

function ShoppingItemInfo(props) {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.title}</h2>
      <div className={classes.button}>
        <button>more info</button>
        <button onClick={() => props.addedToCart(props)}>Add to cart</button>
        <span className={classes.price}>${props.price}</span>
      </div>
    </div>
  );
}

export default ShoppingItemInfo;
