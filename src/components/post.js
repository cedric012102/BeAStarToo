import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';
import styles from './styles/post-style';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {ProfileImage} from './profile-image';
import SearchBox from './searchbox';

export function Post({item}) {
  const navigation = useNavigation();

  const [post, setPost] = useState(item.post);
  const [isLiked, setIsLiked] = useState(0);

  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onPlayMutePress = () => {
    setMuted(!muted);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: item.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayMutePress}>
        <View>
          <Video
            source={{uri: item.imageUrl}}
            style={styles.video}
            onError={(e: LoadError) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
            muted={muted}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              {/* <View style={styles.profilePictureContainer}>
                <TouchableOpacity onPress={() =>
            navigation.navigate('ForeignUserProfile', {
              postId: item.id,
              photoUrl: item.photoUrl,
              uid: item.userId,
              displayName: item.displayName,
            })
          }>
                  <ProfileImage size={40} url={item.photoUrl} />
                </TouchableOpacity>
              </View> */}
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePress}>
                <Ionicons
                  name={'heart-circle'}
                  size={40}
                  color={isLiked ? 'blue' : 'white'}
                />
                <Text style={styles.statsLabel}>{setIsLiked}</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesome name={'comment'} size={40} color="white" />
                <Text style={styles.statsLabel}></Text>
              </View>

              <View style={styles.iconContainer}>
                <FontAwesome name={'money'} size={35} color="white" />
                <Text style={styles.statsLabel}>Send</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ForeignUserProfile', {
                      postId: item.id,
                      photoUrl: item.photoUrl,
                      uid: item.userId,
                      displayName: item.displayName,
                    })
                  }>
                  <Text style={styles.handle}>@{item.displayName}</Text>
                </TouchableOpacity>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              {/* <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ForeignUserProfile', {
                    postId: item.id,
                    photoUrl: item.photoUrl,
                    uid: item.userId,
                    displayName: item.displayName,
                  })
                }>
                <Image
                  style={styles.songImage}
                  source={require('../assets/img/star.webp')}
                />
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
