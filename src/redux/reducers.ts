import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { addCard, deleteCard } from './actions';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { v4 as uuidv4 } from 'uuid';

interface Card {
  id: string;
  title: string;
}

interface AppState {
  cards: Card[];
}

const initialState: AppState = {
  cards: [], 
};

const appReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(addCard, (state, action: PayloadAction<Card>) => {
        const cardWithId = { ...action.payload, id: uuidv4() };
        state.cards.push(cardWithId); 
      })
      .addCase(deleteCard, (state, action: PayloadAction<string>) => {
        state.cards = state.cards.filter((card) => card.id !== action.payload);
      });
  });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export default persistedReducer; 
