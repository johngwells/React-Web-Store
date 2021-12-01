import Card from "../UI/Card";

import classes from "./ShoppingItem.module.css";

function ShoppingItem(props) {
  return (
    <li key={props.id} className={classes.container}>
      <Card>
        <img alt="product" src={props.image} />
      </Card>
    </li>
  );
}

export default ShoppingItem;
