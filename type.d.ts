import { NavigationProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamList = {
  Home: undefined;
  Editor: undefined;
};

export type StackNavigation = NavigationProp<AppStackParamList>;

export type AppScreenNavigationProp = NativeStackScreenProps<
  AppStackParamList,
  Home,
  Editor
>;
