import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  rowBack: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 22,
    paddingHorizontal: 45,
    marginBottom: 25,
  },
  backRightBtn: {
    position: 'absolute',
    bottom: '50%',
    right: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    flex: 1,
  },
});
