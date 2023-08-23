import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import Close from '../../assets/icons/close.svg';
import { EmptySearchResult } from '../../components/EmptySearchResult/EmptySearchResult';
import { List } from '../../components/List/List';
import { IInitialState, INote } from '../../constants/initialState';
import { StackNavigation } from '../../types';
import { styles } from './Search.styles';

export const Search = () => {
  const [text, setText] = useState('');
  const [foundNotes, setFoundNotes] = useState<INote[]>([]);
  const { navigate } = useNavigation<StackNavigation>();
  const notes = useSelector((state: IInitialState) => state.notes.notes);

  useEffect(() => {
    if (text) {
      const filteredNotes = notes.filter(
        note =>
          note.title.toLowerCase().includes(text.toLowerCase()) ||
          note.text.toLowerCase().includes(text.toLowerCase()),
      );
      setFoundNotes(filteredNotes);
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
        <EmptySearchResult />
      ) : (
        <List notes={foundNotes} />
      )}
    </View>
  );
};
