import React, {useState, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import uuid from 'react-native-uuid';
import styles from './styles/create-post-style';
import storage from '@react-native-firebase/storage';
import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {StackActions} from '@react-navigation/routers';

const CreatePost = ({navigation, route}) => {
  const popAction = StackActions.pop(1);
  const fileName = useRef(`${Auth().currentUser.uid}-${uuid.v4()}.png`);
  const userPhotoURL = Auth().currentUser.photoURL;
  const userDisplayName = Auth().currentUser.displayName;
  const FileReference = storage().ref(fileName.current);
  const imageUrl = route.params.image;

  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={description}
        onChangeText={setDescription}
        numberOfLines={5}
        placeholder={'Donation For????'}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={() => onUploadImage(imageUrl)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Publish</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  async function onUploadImage(path) {
    try {
      await FileReference.putFile(path);
      const url = await storage().ref(fileName.current).getDownloadURL();

      await firestore().collection('posts').add({
        id: uuid.v4(),
        imageUrl: url,
        description,
        photoUrl: userPhotoURL,
        displayName: userDisplayName,
        userId: Auth().currentUser.uid,
      });
      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  }
};

export default CreatePost;
