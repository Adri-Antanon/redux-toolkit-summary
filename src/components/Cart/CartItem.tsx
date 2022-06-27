import * as React from 'react';

import classes from './CartItem.module.css';
import { useAppDispatch } from '../../app/hooks';
import {
  addItemToCart,
  PokemonCart,
  removeItemFromCart,
} from '../../features/cart/cartSlice';

type Item = {
  name: string;
  total: number;
  quantity: number;
};

interface Props {
  item: Item;
  pokemonId: number;
}

const CartItem: React.FC<Props> = ({ item, pokemonId }) => {
  const dispatch = useAppDispatch();
  const { name, quantity, total } = item;

  const pokemonCart: PokemonCart = {
    id: pokemonId,
    name,
    quantity,
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          {quantity}{' '}
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
          <button
            onClick={() =>
              dispatch(removeItemFromCart({ item: pokemonCart, id: pokemonId }))
            }
          >
            -
          </button>
          <button
            onClick={() => dispatch(addItemToCart({ item: pokemonCart }))}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
