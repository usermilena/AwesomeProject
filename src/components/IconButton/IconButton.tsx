import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './IconButton.styles';

interface IconButtonProps {
  icon: ReactNode;
  onPress?: () => void;
}

export const IconButton = ({ icon, onPress }: IconButtonProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};
