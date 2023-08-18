import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';

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
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressedNote : styles.note)}
      onPress={openNote}>
      <Text style={styles.text}>{note.title}</Text>
    </Pressable>
  );
};
