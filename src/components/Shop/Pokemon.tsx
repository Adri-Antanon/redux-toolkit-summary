import { useGetPokemonByNameQuery } from '../../api/pokemon';

import classes from './Pokemon.module.css';

export const Pokemon = ({ name }: { name: string }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  if (error) {
    return <div>Error fetching pokemon...</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) return null;

  const { id, name: pokeName, species, moves, sprites } = data;

  const pokemonName = `${pokeName[0].toUpperCase()}${pokeName.slice(1)}`;

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
      {/* <img src={sprites.front_shiny} alt={species.name} /> */}
      <p>{`Number of movements of ${moves.length}`}</p>
    </div>
  );
};
