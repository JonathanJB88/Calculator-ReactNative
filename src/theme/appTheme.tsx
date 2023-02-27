import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  smallResult: {
    color: 'rgba(225, 225, 225, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  btn: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '400',
    color: 'white',
  },
});
