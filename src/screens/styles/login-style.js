import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 70,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 24,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 68,
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 20,
    fontFamily: 'Copperplate',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 50,
  },
  buttonAreaContainer: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
  },
});

export default styles;
