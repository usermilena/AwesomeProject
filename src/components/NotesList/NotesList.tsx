import React from 'react';
import { View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { INote } from '../../constants/initialState';
import { DeleteRow } from '../DeleteRow/DeleteRow';
import { NoteItem } from '../Note/NoteItem';
import { styles } from './NotesList.styles';

interface NotesListProps {
  notes: INote[];
}

export const NotesList = ({ notes }: NotesListProps) => {
  return (
    <View style={styles.wrapper}>
      <SwipeListView
        data={notes}
        renderItem={({ item }) => <NoteItem note={item} />}
        renderHiddenItem={({ item }) => <DeleteRow id={item.id} />}
        rightOpenValue={-85}
        disableRightSwipe
      />
    </View>
  );
};
