import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: -5, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.3,
      },
    }),
    backgroundColor: '#252525',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 49,
    right: 35,
  },
});
