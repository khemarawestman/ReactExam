// src/features/cards/cardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  activeCardId: null,
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.items.push(action.payload);
    },
    removeCard: (state, action) => {
      state.items = state.items.filter(card => card.id !== action.payload);
    },
    setActiveCard: (state, action) => {
      state.activeCardId = action.payload;
    },
  },
});

export const { addCard, removeCard, setActiveCard } = cardSlice.actions;
export default cardSlice.reducer;
