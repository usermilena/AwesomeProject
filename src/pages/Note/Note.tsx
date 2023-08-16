import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

import { Header, HeaderVariant } from '../../components/Header/Header';
import { INote } from '../../constants/initialState';
import { IInitialState } from '../../constants/initialState';
import { styles } from './Note.styles';

export const Note = () => {
  const { params } = useRoute();
  const notes = useSelector((state: IInitialState) => state.notes.notes);

  const note = notes.find((note: INote) => note.id === params.id);

  return (
    <View style={styles.wrapper}>
      <Header variant={HeaderVariant.note} />
      <TextInput value={note.title} style={styles.title} multiline />
      <TextInput
        placeholder="Type something..."
        placeholderTextColor="#9A9A9A"
        value={note.text}
        style={styles.text}
        multiline
      />
    </View>
  );
};
