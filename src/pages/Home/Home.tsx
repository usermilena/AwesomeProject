import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { EmptyNotes } from '../../components/EmptyNotes/EmptyNotes';
import { Header, HeaderVariant } from '../../components/Header/Header';
import { List } from '../../components/List/List';
import { IInitialState } from '../../constants/initialState';
import { styles } from './Home.styles';
import { AddButton } from './components/AddButton/AddButton';

export const Home = () => {
  const notes = useSelector((state: IInitialState) => state.notes.notes);

  return (
    <View style={styles.wrapper}>
      <Header variant={HeaderVariant.home} />
      {!notes.length ? <EmptyNotes /> : <List notes={notes} />}
      <AddButton />
    </View>
  );
};
