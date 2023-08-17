import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { IInitialState } from '../../constants/initialState';
import { NotesList } from '../NotesList/NotesList';
import { styles } from './Content.styles';

export const Content = () => {
  const notes = useSelector((state: IInitialState) => state.notes.notes);

  return (
    <View style={styles.wrapper}>
      {!notes.length ? (
        <View style={styles.imageWrapper}>
          <Image source={require('../../assets/images/empty_notes.png')} />
          <Text style={styles.imageText}>Create your first note!</Text>
        </View>
      ) : (
        <NotesList notes={notes} />
      )}
    </View>
  );
};
