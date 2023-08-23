import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { notesReducer } from './notes.slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    notes: notesReducer,
  }),
);
