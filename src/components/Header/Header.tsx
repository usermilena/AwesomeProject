import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { StackNavigation } from '../../../type';
import Arrow from '../../assets/icons/arrow.svg';
import SearchIcon from '../../assets/icons/search.svg';
import { styles } from './Header.styles';

export enum HeaderVariant {
  home,
  editor,
}

interface HeaderProps {
  variant: HeaderVariant;
  onBack?: () => void;
}

export const Header = ({ variant, onBack }: HeaderProps) => {
  const { navigate } = useNavigation<StackNavigation>();

  const goBack = () => {
    onBack && onBack();
    navigate('Home');
  };

  return (
    <View style={styles.wrapper}>
      {variant === HeaderVariant.home && (
        <View style={styles.menuWrapper}>
          <Text style={styles.title}>Notes</Text>
          <TouchableOpacity style={styles.iconWrapper}>
            <SearchIcon />
          </TouchableOpacity>
        </View>
      )}
      {variant === HeaderVariant.editor && (
        <TouchableOpacity style={styles.iconWrapper} onPress={goBack}>
          <Arrow />
        </TouchableOpacity>
      )}
    </View>
  );
};
