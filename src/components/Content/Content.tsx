import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import AddIcon from '../../assets/icons/add.svg';
import { styles } from './Content.styles';

interface ContentProps {
  //empty
}

export const Content: FC<ContentProps> = () => {
  const { navigate } = useNavigation();

  const addNote = () => {
    navigate('Editor');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image source={require('../../assets/images/empty_notes.png')} />
        <Text style={styles.text}>Create your first note!</Text>
      </View>
      <TouchableOpacity style={styles.addIconWrapper} onPress={addNote}>
        <AddIcon />
      </TouchableOpacity>
    </View>
  );
};
