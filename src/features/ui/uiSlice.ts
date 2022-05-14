import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UiState {
    cartIsVisible: boolean;
}

const initialState: UiState = { cartIsVisible: false }

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const { toggle } = uiSlice.actions;

export const selectCartIsVisible = (state: RootState) => state.ui.cartIsVisible;

export default uiSlice.reducer;