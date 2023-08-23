import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#252525',
    flex: 1,
    paddingVertical: 47,
    paddingHorizontal: 24,
  },
  search: {
    borderRadius: 30,
    backgroundColor: '#3B3B3B',
    paddingVertical: 12,
    paddingLeft: 38,
    flexDirection: 'row',
  },
  text: {
    color: '#CCC',
    fontSize: 20,
    fontWeight: 300,
  },
  closeIcon: {
    position: 'absolute',
    right: 20,
    bottom: '50%',
  },
});
