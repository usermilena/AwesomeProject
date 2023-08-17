import React from 'react';
import { FlatList, View } from 'react-native';

import { INote } from '../../constants/initialState';
import { NoteItem } from '../Note/NoteItem';
import { styles } from './NotesList.styles';

interface NotesListProps {
  notes: INote[];
}

export const NotesList = ({ notes }: NotesListProps) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={notes}
        renderItem={({ item }) => <NoteItem note={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
