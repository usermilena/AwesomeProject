import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../../constants/initialState';

const notesSlice = createSlice({
  name: 'notes',
  initialState: INITIAL_STATE,
  reducers: {
    addNote: (state, action) => ({
      ...state,
      notes: [
        {
          title: action.payload.title,
          text: action.payload.text,
          id: action.payload.id,
        },
        ...state.notes,
      ],
    }),
    editNote: (state, action) => ({
      ...state,
      notes: state.notes.map(note =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.title,
              text: action.payload.text,
            }
          : note,
      ),
    }),
  },
});

export const { addNote, editNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
