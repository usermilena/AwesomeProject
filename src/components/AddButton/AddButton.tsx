import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { StackNavigation } from '../../../type';
import AddIcon from '../../assets/icons/add.svg';
import { styles } from './AddButton.styles';

interface AddButton {
  //empty
}

export const AddButton: FC<AddButton> = () => {
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
