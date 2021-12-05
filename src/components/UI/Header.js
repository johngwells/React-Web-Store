import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './Header.module.css';

function Header() {
  const cartCtx = useContext(CartContext);

  const { cart } = cartCtx

  return <div className={classes.header}>
    <div className={classes['header__cart']}>
      <span>Cart:</span>
{    console.log('Header', cartCtx)}
      <span>{cart}</span>
    </div>
  </div>
}

export default Header;
