import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundUpload: {
    flex: 1,
    width: '100%',
    backgroundColor: 'lightblue',
    paddingHorizontal: 11,
  },
  headerContainer: {
    backgroundColor: 'rgb(221, 244, 244)',
    width: 420,
    height: 113,
    paddingVertical: 25,
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    right: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  uploadContainer: {
    alignItems: 'center',
  },
  dividerLine: {
    backgroundColor: 'black',
    height: 1,
    width: 400,
    marginVertical: 25,
  },
  uploadMainText: {
    fontSize: 24,
    letterSpacing: 0.0,
    alignSelf: 'flex-start',
    fontFamily: 'Copperplate',
  },
  uploadBoxContainer: {
    height: 180,
    width: 333,
    backgroundColor: 'rgb(221, 244, 244)',
    marginVertical: 50,
    borderRadius: 25,
  },
  uploadBoxText: {
    fontSize: 24,
    letterSpacing: 0.0,
    textAlign: 'center',
    marginVertical: 70,
    fontFamily: 'Copperplate',
  },
  uploadImage: {
    marginVertical: 65,
    height: 157,
    width: 190,
    borderRadius: 25,
  },
});
