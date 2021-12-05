import Card from "../UI/Card";

import classes from "./ShoppingItem.module.css";
import ShoppingItemInfo from "./ShoppingItemInfo";

function ShoppingItem(props) {
  console.log(props)
  return (
    <div className={classes.container}>
      <li key={props.id}>
        <Card>
          <img alt="product" src={props.image} />
        </Card>
      </li>
      <ShoppingItemInfo title={props.title} description={props.description}/>
    </div>
  );
}

export default ShoppingItem;
