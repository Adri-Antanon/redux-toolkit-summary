import * as React from 'react';

import classes from './CartItem.module.css';

type Item = {
  title: string;
  price: number;
  total: number;
  quantity: number;
}

interface Props {
  item: Item;
}

const CartItem: React.FC<Props> = ({item}) => {
  const { title, quantity, total, price } = item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;