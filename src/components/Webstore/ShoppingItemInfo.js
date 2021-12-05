import { useContext} from 'react';
import CartContext from '../../store/cart-context';

function ShoppingItemInfo(props) {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <h2>{props.title}</h2>
      <button>more info</button>
      <button onClick={cartCtx.addItem}>Add to cart</button>
    </>
  );
}

export default ShoppingItemInfo;
