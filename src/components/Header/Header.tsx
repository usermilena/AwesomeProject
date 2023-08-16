import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { StackNavigation } from '../../../type';
import Arrow from '../../assets/icons/arrow.svg';
import SearchIcon from '../../assets/icons/search.svg';
import Visibility from '../../assets/icons/visibility.svg';
import { styles } from './Header.styles';

export enum HeaderVariant {
  home,
  note,
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
        <Text style={styles.title}>Notes</Text>
      )}
      {(variant === HeaderVariant.editor || variant === HeaderVariant.note) && (
        <TouchableOpacity style={styles.iconsWrapper} onPress={goBack}>
          <Arrow />
        </TouchableOpacity>
      )}
      {(variant === HeaderVariant.editor || variant === HeaderVariant.home) && (
        <View style={styles.menuWrapper}>
          <View style={styles.iconsWrapper}>
            {variant === HeaderVariant.editor && (
              <TouchableOpacity>
                <Visibility />
              </TouchableOpacity>
            )}
            {variant === HeaderVariant.home && (
              <TouchableOpacity>
                <SearchIcon />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};
