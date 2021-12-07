import Card from "../UI/Card";

import classes from "./ShoppingItem.module.css";
import ShoppingItemInfo from "./ShoppingItemInfo";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

function ShoppingItem(props) {
  const cartCtx = useContext(CartContext)
  
  const handleAddedToCart = (id) => {
    cartCtx.addData(id)
  }

  return (
    <div className={classes.container}>
      <li key={props.id}>
        <Card>
          <img alt="product" src={props.image} />
        </Card>
      </li>
      <ShoppingItemInfo id={props.id} title={props.title} description={props.description} price={props.price} addedToCart={handleAddedToCart}/>
    </div>
  );
}

export default ShoppingItem;
