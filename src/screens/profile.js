import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  ActionSheetIOS,
  Platform,
  FlatList,
  TextInput,
} from 'react-native';
import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ProfileImage} from '../components/profile-image';
import storage from '@react-native-firebase/storage';
import {useRef} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {LinearProgress} from 'react-native-elements';
import {styles} from './styles/profile-style';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Profile = (item) => {
  const photoURL = Auth().currentUser.photoURL;
  const [isLoading, setIsLoading] = useState(false);
  const fileName = useRef(`${Auth().currentUser.uid}-profile.png`);
  const FileReference = storage().ref(fileName.current);
  const [posts, setPosts] = useState([]);
  const initialProfileName = Auth().currentUser.displayName;
  const [profileName, setProfileName] = useState(initialProfileName);
  const navigation = useNavigation();

  useEffect(onSyncPosts, []);
  useEffect(onSaveTitle, [profileName]);



  return (
    <View style={styles.backgroundProfile}>
      <View style={styles.containerGallery}>
        <FlatList
          numColumns={3}
          horizontal={false}
          keyExtractor={(_, index) => index}
          data={posts}
          ListHeaderComponent={
            <>
              <View style={styles.followerTextContainer}>
                <Entypo name="star" size={24} color="red" />
              </View>

              <View style={styles.profileContainer}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Enter Profile Name"
                  value={profileName}
                  onChangeText={setProfileName}
                  style={styles.profileText}
                />
                <TouchableOpacity onPress={onShowActionSheet}>
                  <ProfileImage url={photoURL} />
                  {isLoading && <LinearProgress size="large" />}
                </TouchableOpacity>
              </View>
            </>
          }
          renderItem={({item}) => (
            <View style={styles.containerImage}>
              <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
                <Video
                  repeat={true}
                  resizeMode={'stretch'}
                  muted
                  style={styles.image}
                  source={{uri: item.imageUrl}}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

    </View>
  );

  function onSyncPosts() {
    const unsubscribe = firestore()
      .collection('posts')
      .where('userId', '==', Auth().currentUser.uid)
      .onSnapshot({
        next: collection => {
          const collectionDocuments = collection.docs.map(item => item.data());
          setPosts(collectionDocuments);
        },
      });

    return unsubscribe;
  }

  async function onSaveTitle() {
    await Auth().currentUser.updateProfile({
      displayName: profileName,
    });
  }

  function onShowActionSheet() {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Open Library', 'Take Photo'],
          cancelButtonIndex: 0,
        },
        buttonIndex => {
          if (buttonIndex === 1) {
            pickImage();
          } else if (buttonIndex === 2) {
            takePicture();
          }
        },
      );
    }
  }

  async function takePicture() {
    const result = await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
    onUploadImage(result);
  }

  async function pickImage() {
    const result = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });

    if (!result.cancelled) {
      onUploadImage(result);
    }
  }

  async function onUploadImage(result) {
    setIsLoading(true);

    const pathToFile = result.path;
    await FileReference.putFile(pathToFile);

    const url = await storage().ref(fileName.current).getDownloadURL();

    await Auth().currentUser.updateProfile({
      photoURL: url,
    });

    setIsLoading(false);
  }

  

     
      
  
};

export default Profile;
