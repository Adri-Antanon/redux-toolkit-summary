import * as React from "react"
import classes from './Card.module.css';

interface Props{
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Card: React.FC<Props> = ({className, children }) => {
  return (
    <section
      className={`${classes.card} ${className ? className : ''}`}
    >
      {children}
    </section>
  );
};

export default Card;
