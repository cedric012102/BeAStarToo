import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActionSheetIOS,
} from 'react-native';
import {styles} from './styles/camera-style';
import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const UploadPage = ({navigation}) => {
  return (
    <View style={styles.backgroundUpload}>
      <View style={styles.uploadContainer}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.uploadMainText}>Videos</Text>
        <TouchableOpacity onPress={onShowActionSheet}>
          <View style={styles.uploadBoxContainer}>
            <Text style={styles.uploadBoxText}>Tap To Upload Video</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1455810149947-5009dd11b762?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          }}
          style={styles.uploadImage}
        />
      </View>
    </View>
  );

  function onShowActionSheet() {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Open Library', 'Make Video'],
          cancelButtonIndex: 0,
        },
        buttonIndex => {
          if (buttonIndex === 1) {
            pickVideo();
          } else if (buttonIndex === 2) {
            makeVideo();
          }
        },
      );
    }
  }

  async function makeVideo() {
    const result = await ImagePicker.openCamera({
      mediaType: 'video',
      width: 300,
      height: 400,
      cropping: true,
    });

    if (!result.cancelled) {
      navigation.navigate('CreatePost', {image: result.path});
    }
  }

  async function pickVideo() {
    const result = await ImagePicker.openPicker({
      mediaType: 'video',
      width: 300,
      height: 400,
    });

    if (!result.cancelled) {
      navigation.navigate('CreatePost', {image: result.path});
    }
  }
};

export default UploadPage;
