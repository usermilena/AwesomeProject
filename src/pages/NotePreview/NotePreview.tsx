import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import DeleteIcon from '../../assets/icons/red-delete.svg';
import { INote } from '../../constants/initialState';
import { deleteNote } from '../../store/slices/notes.slice';
import { styles } from './NotePreview.styles';

interface NotePreview {
  note: INote;
}

export const NotePreview = ({ note }: NotePreview) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <View style={styles.wrapper}>
      <TextInput value={note.title} style={styles.title} multiline />
      <TextInput value={note.text} style={styles.text} multiline />
      <TouchableOpacity onPress={handlePress} style={styles.deleteWrapper}>
        <Text style={styles.deleteText}>Delete</Text>
        <DeleteIcon />
      </TouchableOpacity>
    </View>
  );
};
