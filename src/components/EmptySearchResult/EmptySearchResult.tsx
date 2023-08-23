import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './EmptySearchResult.styles';

export const EmptySearchResult = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.message}>File not found. Try searching again.</Text>
    </View>
  );
};
