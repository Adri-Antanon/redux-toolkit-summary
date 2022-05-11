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
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
