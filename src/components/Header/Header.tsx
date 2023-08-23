import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

import BackArrowIcon from '../../assets/icons/arrow.svg';
import SearchIcon from '../../assets/icons/search.svg';
import { StackNavigation } from '../../types';
import { IconButton } from '../IconButton/IconButton';
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

  const goSearch = () => {
    navigate('Search');
  };

  return (
    <View style={styles.wrapper}>
      {variant === HeaderVariant.home && (
        <View style={styles.menuWrapper}>
          <Text style={styles.title}>Notes</Text>
          <IconButton onPress={goSearch} icon={<SearchIcon />} />
        </View>
      )}
      {variant === HeaderVariant.editor && (
        <IconButton onPress={onBack} icon={<BackArrowIcon />} />
      )}
    </View>
  );
};
