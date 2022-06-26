import * as React from 'react';

import classes from './CartItem.module.css';
import { useAppDispatch } from '../../app/hooks';

type Item = {
  name: string;
  total: number;
  quantity: number;
};

interface Props {
  item: Item;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { name, quantity, total } = item;
  const dispatch = useAppDispatch();

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          {total}{' '}
          <span className={classes.itemprice}>
            {quantity === 1 ? `${name}` : ` ${name}'s`}
          </span>
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
