import React from 'react';
import { FlatList, View } from 'react-native';

import { INote } from '../../constants/initialState';
import { NoteItem } from '../NoteItem/NoteItem';
import { styles } from './List.styles';

interface ListProps {
  notes: INote[];
}

export const List = ({ notes }: ListProps) => {
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
