import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { StackNavigation } from '../../../types';
import { INote } from '../../constants/initialState';
import { styles } from './NoteItem.styles';

interface NoteItemProps {
  note: INote;
}

export const NoteItem = ({ note }: NoteItemProps) => {
  const { navigate } = useNavigation<StackNavigation>();

  const openNote = () => {
    navigate('Editor', { id: note.id });
  };

  return (
    <TouchableOpacity style={styles.noteWrapper} onPress={openNote}>
      <Text style={styles.noteText}>{note.title}</Text>
    </TouchableOpacity>
  );
};
