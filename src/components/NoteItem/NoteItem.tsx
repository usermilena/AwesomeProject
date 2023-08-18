import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import { StackNavigation } from '../../../types';
import { INote } from '../../constants/initialState';
import { NotePreview } from '../../pages/NotePreview/NotePreview';
import { styles } from './NoteItem.styles';

interface NoteItemProps {
  note: INote;
}

export const NoteItem = ({ note }: NoteItemProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { navigate } = useNavigation<StackNavigation>();

  const openNote = () => {
    navigate('Editor', { id: note.id });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressedNote : styles.note)}
        onPress={openNote}
        onLongPress={toggleModal}>
        <Text style={styles.text}>{note.title}</Text>
      </Pressable>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        animationIn="zoomIn"
        animationOut="zoomOut"
        backdropOpacity={0.9}>
        <NotePreview note={note} />
      </Modal>
    </View>
  );
};
