import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { StackNavigation } from '../../../types';
import Close from '../../assets/icons/close.svg';
import { NotesList } from '../../components/NotesList/NotesList';
import { IInitialState, INote } from '../../constants/initialState';
import { styles } from './Search.styles';

export const Search = () => {
  const [text, setText] = useState('');
  const [foundNotes, setFoundNotes] = useState<INote[]>([]);
  const { navigate } = useNavigation<StackNavigation>();
  const notes = useSelector((state: IInitialState) => state.notes.notes);

  useEffect(() => {
    if (text) {
      const res = notes.filter(
        note =>
          note.title.toLowerCase().includes(text.toLowerCase()) ||
          note.text.toLowerCase().includes(text.toLowerCase()),
      );
      setFoundNotes(res);
    }
  }, [text]);

  const closeSearch = () => {
    navigate('Home');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.search}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Search by the keyword..."
          placeholderTextColor="#ccc"
          style={styles.text}
          multiline
        />
        <TouchableOpacity style={styles.closeIcon} onPress={closeSearch}>
          <Close />
        </TouchableOpacity>
      </View>
      {!text || !foundNotes.length ? (
        <View style={styles.messageWrapper}>
          <Text style={styles.message}>
            File not found. Try searching again.
          </Text>
        </View>
      ) : (
        <NotesList notes={foundNotes} />
      )}
    </View>
  );
};
