import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundProfile: {
    flex: 1,
    width: '100%',
    backgroundColor: 'lightblue',
    paddingHorizontal: 11,
  },
  followerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 12,
  },
  followersText: {
    color: 'rgb(71, 71, 71)',
    letterSpacing: 0.0,
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileText: {
    color: 'rgb(36, 52, 67)',
    letterSpacing: 0.0,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  profileIcon: {
    borderRadius: 475,
    backgroundColor: 'white',
    marginVertical: 32,
    width: 200,
    height: 200,
    borderColor: 'purple',
    borderWidth: 5,
  },
  container: {
    flex: 1,
  },
  containerGallery: {
    flex: 1,
  },
  containerImage: {
    width: '32%',
    marginHorizontal: 4,
    marginVertical: 4,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 2,
    marginRight: 7,
  },
});
