import { NavigationProp, RouteProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

interface IEditor {
  id: string;
}

export type AppStackParamList = {
  Home: undefined;
  Editor: IEditor | undefined;
  Search: undefined;
};

export type StackNavigation = NavigationProp<AppStackParamList>;

export type AppScreenNavigationProp = NativeStackScreenProps<AppStackParamList>;

export type EditorScreenRouteProp = RouteProp<AppStackParamList, 'Editor'>;
