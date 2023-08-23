import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { INote } from '../../constants/initialState';
import { StackNavigation } from '../../types';
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
    <TouchableOpacity style={styles.wrapper} onPress={openNote}>
      <Text style={styles.text}>{note.title}</Text>
    </TouchableOpacity>
  );
};
