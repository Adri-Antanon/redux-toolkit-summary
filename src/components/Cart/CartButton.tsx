import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  /* numberOfPokemons */ pokemonList,
} from '../../features/cart/cartSlice';
import { toggle } from '../../features/ui/uiSlice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useAppDispatch();
  const myPokemons = useAppSelector(pokemonList);

  const myPokemonsCount = myPokemons.reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  );

  return (
    <button className={classes.button} onClick={() => dispatch(toggle())}>
      <span>My Team</span>
      <span className={classes.badge}>{myPokemonsCount}</span>
    </button>
  );
};

export default CartButton;
