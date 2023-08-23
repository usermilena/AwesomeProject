import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';

import { Header, HeaderVariant } from '../../components/Header/Header';
import { IInitialState } from '../../constants/initialState';
import { addNote, editNote } from '../../store/slices/notes.slice';
import { EditorScreenRouteProp, StackNavigation } from '../../types';
import { styles } from './Editor.styles';

export const Editor = () => {
  const { navigate } = useNavigation<StackNavigation>();
  const { params } = useRoute<EditorScreenRouteProp>();

  const note = useSelector((state: IInitialState) =>
    state.notes.notes.find(note => note.id === params?.id),
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState(note ? note?.title : '');
  const [text, setText] = useState(note ? note?.text : '');

  const offset = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const onBack = () => {
    if (note?.id) {
      dispatch(editNote({ title, text, id: note.id }));
      navigate('Home');
      return;
    }

    if (title) {
      dispatch(addNote({ title, text, id: uuid.v4() }));
      navigate('Home');
      return;
    }

    if (!title && text) {
      offset.value = withRepeat(
        withTiming(10, { duration: 100, easing: Easing.linear }),
        4,
        true,
      );
      return;
    }

    if (!title && !text) {
      navigate('Home');
      return;
    }
  };

  return (
    <View style={styles.wrapper}>
      <Header variant={HeaderVariant.editor} onBack={onBack} />
      <Animated.View style={style}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          placeholderTextColor="#9A9A9A"
          style={styles.title}
          multiline
        />
      </Animated.View>
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
