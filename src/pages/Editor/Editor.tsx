import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';

import { Header, HeaderVariant } from '../../components/Header/Header';
import { IInitialState, INote } from '../../constants/initialState';
import { addNote, editNote } from '../../store/slices/notes.slice';
import { styles } from './Editor.styles';

export const Editor = () => {
  const { params } = useRoute();
  const note = useSelector((state: IInitialState) =>
    state.notes.notes.find((note: INote) => note.id === params?.id),
  );
  const [title, setTitle] = useState(note ? note?.title : '');
  const [text, setText] = useState(note ? note?.text : '');
  const dispatch = useDispatch();

  const onBack = () => {
    if (note) {
      dispatch(editNote({ title, text, id: note.id }));
      return;
    }

    if ((!!title && !!text) || (!!title && !text)) {
      dispatch(addNote({ title, text, id: uuid.v4() }));
    }

    if (!title && !!text) {
      console.log('title is empty');
    }

    if (!title && !text) {
      return;
    }
  };

  return (
    <View style={styles.wrapper}>
      <Header variant={HeaderVariant.editor} onBack={onBack} />
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        placeholderTextColor="#9A9A9A"
        style={styles.title}
        multiline
      />
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type something..."
        placeholderTextColor="#9A9A9A"
        style={styles.text}
        multiline
      />
    </View>
  );
};
