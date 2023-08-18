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
    deleteNote: (state, action) => ({
      ...state,
      notes: state.notes.filter(note => note.id !== action.payload),
    }),
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
