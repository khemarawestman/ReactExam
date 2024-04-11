
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';

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

const preloadedState = {
  cards: {
    items: loadFromLocalStorage() || [],
    activeCardId: null,
  },
};

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
