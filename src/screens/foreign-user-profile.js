import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {styles} from './styles/foreign-user-profile-style';
import {ProfileImage} from '../components/profile-image';
import firestore from '@react-native-firebase/firestore';
import Video from 'react-native-video';

const ForeignUserProfilePage = ({navigation, route}) => {
  const [posts, setPosts] = useState([]);
  const userId = route.params.uid;
  const photoUrl = route.params.photoUrl;
  const displayName = route.params.displayName;

  useEffect(() => {
    navigation.setOptions({
      title: 'Profile',
    });
  }, []);
  useEffect(onSyncPosts, []);
  return (
    <View style={styles.backgroundProfile}>
      <View style={styles.containerGallery}>
        <FlatList
          numColumns={3}
          horizontal={false}
          keyExtractor={(_, index) => index}
          data={posts}
          ListHeaderComponent={
            <View style={styles.profileContainer}>
              <Image
                source={require('../assets/img/star.webp')}
                style={styles.profileIcon}
              />
              <Text style={styles.profileText}>{displayName}</Text>
            </View>
          }
          renderItem={({item}) => (
            <View style={styles.containerImage}>
              <Video
                repeat={true}
                muted
                resizeMode={'stretch'}
                style={styles.image}
                source={{uri: item.imageUrl}}
              />
            </View>
          )}
        />
      </View>
    </View>
  );

  function onSyncPosts() {
    const unsubscribe = firestore()
      .collection('posts')
      .where('userId', '==', userId)
      .onSnapshot({
        next: collection => {
          const collectionDocuments = collection.docs.map(item => item.data());
          setPosts(collectionDocuments);
        },
      });

    return unsubscribe;
  }
};

export default ForeignUserProfilePage;
