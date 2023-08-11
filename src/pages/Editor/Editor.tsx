import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import { Header, HeaderVariant } from '../../components/Header/Header';
import { styles } from './Editor.styles';

export const Editor = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  return (
    <View style={styles.wrapper}>
      <Header variant={HeaderVariant.editor} />
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
