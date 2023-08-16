import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../../constants/initialState';

const notesSlice = createSlice({
  name: 'notes',
  initialState: INITIAL_STATE,
  reducers: {
    // setTitle: (state, action) => ({ ...state, title: action.payload }),
    // setText: (state, action) => ({
    //   ...state,
    //   text: action.payload,
    // }),
    addNote: (state, action) => ({
      ...state,
      notes: [
        ...state.notes,
        {
          title: action.payload.title,
          text: action.payload.text,
          id: action.payload.id,
        },
      ],
    }),
  },
});

export const { addNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
