import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface PokemonCart {
  id: number;
  name: string;
  quantity: number;
}

export interface CartState {
  pokemonList: PokemonCart[];
  totalQuantity: number;
}

const initialState: CartState = {
  pokemonList: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.pokemonList = action.payload.items;
    },
    addItemToCart(state, action: PayloadAction<{ item: PokemonCart }>) {
      const { item: newItem } = action.payload;
      const existingItem = state.pokemonList.find(
        (pokemon) => pokemon.id === newItem.id,
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.pokemonList.push({
          id: newItem.id,
          quantity: 1,
          name: newItem.name,
        });
      } else if (existingItem) {
        existingItem.quantity++;
      }
    },
    removeItemFromCart(
      state,
      action: PayloadAction<{ item: PokemonCart; id: number }>,
    ) {
      const { id } = action.payload;
      const existingItem = state.pokemonList.find(
        (pokemon) => pokemon.id === id,
      );

      if (!existingItem) return;

      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.pokemonList = state.pokemonList.filter(
          (pokemon) => pokemon.id !== id,
        );
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const { removeItemFromCart, replaceCart, addItemToCart } =
  cartSlice.actions;

export const pokemonList = (state: RootState) => state.cart.pokemonList;
// export const numberOfPokemons = (state: RootState) => state.cart.totalQuantity;

export default cartSlice.reducer;
