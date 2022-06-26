import classes from './Pokemon.module.css';
import { Sprites } from '../../types/index';

export interface Props {
  name: string;
  id: number;
  numberOfMoves: number;
  height: number;
  weight: number;
  sprites: Sprites;
}

export const Pokemon = ({
  name: pokeName,
  id,
  numberOfMoves,
  sprites,
  height,
  weight,
}: Props) => {
  const pokemonName = `${pokeName[0].toUpperCase()}${pokeName.slice(1)}`;
  const heightInMeters = (height * 0.3048) / 10;
  const weightInKg = (weight * 0.453592) / 10;

  return (
    <div className={classes.pokemon}>
      <header>
        <h3>{pokemonName}</h3>
        <div className={classes.id}>ID: {id}</div>
      </header>
      {sprites ? (
        <img src={sprites.front_default} alt={pokemonName} />
      ) : (
        <p>Loading picture...</p>
      )}
      <p>{`Number of movements of ${numberOfMoves}`}</p>
      <p>{`Height: ${heightInMeters.toFixed(
        2,
      )} cm and weight: ${weightInKg.toFixed(2)} kg`}</p>
    </div>
  );
};
