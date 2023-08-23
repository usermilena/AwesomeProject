import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Router } from './Router';
import { persistor, store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};
