import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './Header.module.css';

function Header() {
  const cartCtx = useContext(CartContext);

  const { cartCount } = cartCtx

  return <div className={classes.header}>
    <div className={classes['header__cart']}>
      <span>Cart:</span>
      {console.log('Header', cartCtx)}
      <span>{cartCount}</span>
      <button className={classes.button} onClick={cartCtx.removeItem}>Remove from cart</button>
    </div>
  </div>
}

export default Header;
