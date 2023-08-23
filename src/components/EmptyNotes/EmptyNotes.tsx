import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './EmptyNotes.styles';

export const EmptyNotes = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('../../assets/images/empty_notes.png')} />
      <Text style={styles.text}>Create your first note!</Text>
    </View>
  );
};
