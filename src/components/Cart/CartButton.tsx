import { useAppDispatch } from '../../app/hooks';
import { toggle } from '../../features/ui/uiSlice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useAppDispatch()

  return (
    <button className={classes.button} onClick={() => dispatch(toggle())} >
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
