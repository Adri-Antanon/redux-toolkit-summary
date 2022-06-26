import { useAppSelector } from '../../app/hooks';
import { pokemonList } from '../../features/cart/cartSlice';

import Card from '../UI/Card';

import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const pokemons = useAppSelector(pokemonList);

  console.log(pokemons);

  return (
    <Card className={classes.cart}>
      <h2>Your Team</h2>
      <ul>
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <CartItem
              key={pokemon.id}
              item={{
                name: pokemon.name,
                total: 1,
                quantity: pokemon.quantity,
              }}
            />
          ))
        ) : (
          <p>You have no pokemons in your team</p>
        )}
      </ul>
    </Card>
  );
};

export default Cart;
