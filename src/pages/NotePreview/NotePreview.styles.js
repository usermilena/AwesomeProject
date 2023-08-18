import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#252525',
    minHeight: 350,
    maxHeight: 500,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 90,
  },
  title: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 400,
    paddingTop: 40,
    paddingBottom: 40,
  },
  text: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 400,
  },
  deleteWrapper: {
    backgroundColor: '#252525',
    borderRadius: 10,
    width: 120,
    position: 'absolute',
    bottom: -60,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
  pressedDelete: {
    color: 'red',
  },
  deleteText: {
    color: '#FA5252',
    fontSize: 18,
    fontWeight: 400,
  },
});
