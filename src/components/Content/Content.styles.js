import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 300,
  },
  addIconWrapper: {
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
    bottom: 0,
    right: 0,
  },
});
