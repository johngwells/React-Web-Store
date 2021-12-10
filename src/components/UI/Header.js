import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './Header.module.css';

function Header() {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx)

  const { cart } = cartCtx;

  const handleResetCart = (item) => {
    cartCtx.reset(item);
  }

  return <div className={classes.header}>
    <div className={classes['header__cart']}>
      <span>Cart:</span>
      <span>{cart.cartItems.length}</span>
      <button className={classes.button} onClick={() => handleResetCart(cartCtx.cart)}>Delete Cart</button>
    </div>
  </div>
}

export default Header;
