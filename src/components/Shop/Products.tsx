import * as React from "react";

import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { Product } from '../../types';


interface Props {
  products: Product[];
}

const Products: React.FC<Props> = ({
  products
}) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.length > 0 && products.map(product => (
          <ProductItem
            key={`${product.title} ${product.description}`}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
