import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import DeleteIcon from '../../assets/icons/delete.svg';
import { deleteNote } from '../../store/slices/notes.slice';
import { styles } from './DeleteRow.styles';

interface DeleteRowProps {
  id: string;
}

export const DeleteRow = ({ id }: DeleteRowProps) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(deleteNote(id));
  };

  return (
    <View style={styles.rowBack}>
      <TouchableOpacity style={styles.backRightBtn} onPress={onPress}>
        <DeleteIcon />
      </TouchableOpacity>
    </View>
  );
};
