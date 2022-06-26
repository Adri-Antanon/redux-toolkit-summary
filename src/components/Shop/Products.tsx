import * as React from 'react';

import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { Pokemon } from '../../types';

interface Props {
  products: Pokemon[];
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Products: React.FC<Props> = ({
  products,
  onNextPage,
  onPreviousPage,
}) => {
  return (
    <section className={classes.products}>
      <h2>Select your favorites Pokémons</h2>
      <ul>
        {products.length > 0 &&
          products.map((product) => (
            <ProductItem
              key={`${product.name}`}
              title={`${product.name[0].toUpperCase()}${product.name.slice(1)}`}
            />
          ))}
      </ul>
      <div className={classes.buttons}>
        <button onClick={onPreviousPage}>Previous </button>
        <button onClick={onNextPage}>Next </button>
      </div>
    </section>
  );
};

export default Products;
