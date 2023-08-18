import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    color: '#FFF',
    fontSize: 43,
    fontWeight: 600,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#3B3B3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
