// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';

// Function to load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cards');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('Failed to load state from localStorage:', e);
    return undefined;
  }
};

// Preloaded state from localStorage
const preloadedState = {
  cards: {
    items: loadFromLocalStorage() || [],
    activeCardId: null,
  },
};

// Create store with reducers and preloaded state
export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
  preloadedState,
});

// Listener to save state to localStorage
store.subscribe(() => {
  try {
    const serializedState = JSON.stringify(store.getState().cards.items);
    localStorage.setItem('cards', serializedState);
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
});
