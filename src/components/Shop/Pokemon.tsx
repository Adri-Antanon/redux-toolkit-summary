import { useGetPokemonByNameQuery } from '../../api/pokemon';

import classes from './Pokemon.module.css';

export const Pokemon = ({ name }: { name: string }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className={classes.pokemon}>
          <header>
            <h3>{data.name}</h3>
            <div className={classes.id}>ID: {data.id}</div>
          </header>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
          <p>{`Number of movements of ${data.moves.length}`}</p>
        </div>
      ) : null}
    </>
  );
};
