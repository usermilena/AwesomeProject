import { StyleSheet } from 'react-native';

// const colors = [
//   '#FD99FF',
//   '#FF9E9E',
//   '#91F48F',
//   '#FFF599',
//   '#9EFFFF',
//   '#B69CFF',
// ];

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 42,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imageText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 300,
  },
  noteWrapper: {
    borderRadius: 10,
    backgroundColor: '#91F48F',
    paddingVertical: 22,
    paddingHorizontal: 45,
    marginBottom: 25,
  },
  noteText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 400,
  },
});
