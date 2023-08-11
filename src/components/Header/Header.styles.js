import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFF',
    fontSize: 43,
    fontWeight: 600,
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 21,
  },
  iconsWrapper: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#3B3B3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
