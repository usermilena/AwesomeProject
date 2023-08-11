import React from 'react';
import { View } from 'react-native';

import { Content } from '../../components/Content/Content';
import { Header, HeaderVariant } from '../../components/Header/Header';
import { styles } from './Home.styles';

export const Home = () => {
  return (
    <View style={styles.wrapper}>
      <Header variant={HeaderVariant.home} />
      <Content />
    </View>
  );
};