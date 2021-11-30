import React, {useState} from 'react';
import {SafeAreaView, View, TouchableWithoutFeedback} from 'react-native';
import Auth from '@react-native-firebase/auth';
import {PrimaryButton} from '../components/primary-button';
import {StackActions, useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';
import styles from './styles/menu-style';

const Menu = () => {
  const navigation = useNavigation();
  const onLogout = () => {
    //Logout functionality here
    Auth().signOut();
    navigation.dispatch(StackActions.replace('Login'));
  };

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <TouchableWithoutFeedback onPress={onPlayPausePress}>
      <SafeAreaView style={styles.container}>
        <Video
          // source={{uri: getVideoUri}}
          source={require('../assets/img/bye.mp4')}
          style={styles.video}
          onError={(e: LoadError) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />

        <View style={styles.buttonAreaContainer}>
          <PrimaryButton
            label="Sign Out"
            onPress={onLogout}
            iconName="logout"
            iconColor="purple"
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Menu;
