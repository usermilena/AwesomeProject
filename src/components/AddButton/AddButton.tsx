import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { StackNavigation } from '../../../types';
import AddIcon from '../../assets/icons/add.svg';
import { styles } from './AddButton.styles';

export const AddButton = () => {
  const { navigate } = useNavigation<StackNavigation>();

  const addNote = () => {
    navigate('Editor');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={addNote}>
      <AddIcon />
    </TouchableOpacity>
  );
};
