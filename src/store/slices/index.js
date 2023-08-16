import { combineReducers } from '@reduxjs/toolkit';

import { notesReducer } from './notes.slice';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

export const rootReducer = combineReducers({ notes: notesReducer });
