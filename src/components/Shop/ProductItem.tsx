import * as React from 'react';

import Card from '../UI/Card';
import { Pokemon } from './Pokemon';
import classes from './ProductItem.module.css';

interface Props {
  title: string;
}

const ProductItem: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <li className={classes.item}>
      <Card>
        <Pokemon name={title.toLocaleLowerCase()} />
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
