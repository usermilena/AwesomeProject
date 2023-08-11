import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Arrow from '../../assets/icons/arrow.svg';
import InfoIcon from '../../assets/icons/info_outline.svg';
import Save from '../../assets/icons/save.svg';
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
}

export const Header: FC<HeaderProps> = ({ variant }) => {
  const { navigate } = useNavigation();

  const goBack = () => {
    navigate('Home');
  };

  return (
    <View style={styles.wrapper}>
      {variant === HeaderVariant.home && (
        <Text style={styles.title}>Notes</Text>
      )}
      {variant === HeaderVariant.editor && (
        <TouchableOpacity style={styles.iconsWrapper} onPress={goBack}>
          <Arrow />
        </TouchableOpacity>
      )}
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
        <View style={styles.iconsWrapper}>
          <TouchableOpacity>
            {variant === HeaderVariant.editor && <Save />}
          </TouchableOpacity>
          {variant === HeaderVariant.home && (
            <TouchableOpacity>
              <InfoIcon />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
