import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { StackNavigation } from '../../../type';
import { IInitialState } from '../../constants/initialState';
import { styles } from './Content.styles';

export const Content = () => {
  const notes = useSelector((state: IInitialState) => state.notes.notes);
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.wrapper}>
      {!notes.length ? (
        <View style={styles.imageWrapper}>
          <Image source={require('../../assets/images/empty_notes.png')} />
          <Text style={styles.imageText}>Create your first note!</Text>
        </View>
      ) : (
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.noteWrapper}
              onPress={() => {
                navigate('Editor', { id: item.id });
              }}>
              <Text style={styles.noteText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};
