import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Item {
    id: number;
    title: string;
    price: number;
    quantity: number;
    totalPrice: number;
}

export interface CartState {
    items: Item[];
    totalQuantity: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action: PayloadAction<{ item: Item }>) {
            const { item: newItem } = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                });
            } else if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action: PayloadAction<{ item: Item; id: number }>) {
            const { id } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (!existingItem) return;

            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
            }
        },
    },
});

export const { removeItemFromCart, replaceCart, addItemToCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;