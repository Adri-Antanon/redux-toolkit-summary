import * as React from 'react';
import { addItemToCart } from '../../features/cart/cartSlice';

import Card from '../UI/Card';
import { Pokemon } from './Pokemon';

import { useAppDispatch } from '../../app/hooks';
import { useGetPokemonByNameQuery } from '../../api/pokemon';

import classes from './ProductItem.module.css';

interface Props {
  title: string;
}

const ProductItem: React.FC<Props> = (props) => {
  const { title: name } = props;
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  const dispatch = useAppDispatch();

  if (error) {
    return <div>Error fetching pokemon...</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) return null;

  const { id, name: pokeName, moves, sprites, height, weight } = data;

  return (
    <li className={classes.item}>
      <Card>
        <Pokemon
          id={id}
          numberOfMoves={moves.length}
          sprites={sprites}
          height={height}
          weight={weight}
          name={pokeName.toLocaleLowerCase()}
        />
        <div className={classes.actions}>
          <button
            onClick={() =>
              dispatch(
                addItemToCart({
                  item: {
                    id,
                    name,
                    quantity: 1,
                  },
                }),
              )
            }
          >
            Add to your team
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
