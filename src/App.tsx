import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';

import { AppStackParamList } from '../type';
import { Editor } from './pages/Editor/Editor';
import { Home } from './pages/Home/Home';
import { Note } from './pages/Note/Note';
import { store } from './store';

const Stack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Editor"
            component={Editor}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="Note"
            component={Note}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
