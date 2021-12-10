import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './Header.module.css';

function Header() {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx)

  const { cart } = cartCtx;

  const handleRemoveFromCart = (item) => {
    cartCtx.removeItem(item);
  }

  return <div className={classes.header}>
    <div className={classes['header__cart']}>
      <span>Cart:</span>
      {/* {console.log('Header', cartCtx)} */}
      <span>{cart.count}</span>
      <button className={classes.button} onClick={() => handleRemoveFromCart(cartCtx.cart)}>Remove from cart</button>
    </div>
  </div>
}

export default Header;
