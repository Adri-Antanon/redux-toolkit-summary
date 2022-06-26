// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokeApi, Pokemon, PokeData } from '../types/index';

const API_URL = 'https://pokeapi.co/api/v2/';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokeData, number>({
      query: (offset) => `/pokemon?offset=${offset}&limit=5`,
    }),
    getPokemonByName: builder.query<PokeApi, string>({
      query: (name) => `pokemon/${name}`,
      //   transformResponse: (response: { data: PokeApi }, meta, arg) =>
      //     response.data,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonsQuery } = pokemonApi;
