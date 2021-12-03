import Card from "../UI/Card";

import classes from "./ShoppingItem.module.css";

function ShoppingItem(props) {
  return (
    <div className={classes.container}>
    <li key={props.id}>
      <Card>
        <img alt="product" src={props.image} />
      </Card>
    </li>
    </div>
  );
}

export default ShoppingItem;
