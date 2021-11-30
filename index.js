/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as firebase from 'firebase';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const firebaseConfig = {
  apiKey: 'AIzaSyBD2mbnj3rOBOBH3aFM0-wQI9Rus6QWrcc',
  authDomain: 'beastartoo.firebaseapp.com',
  projectId: 'beastartoo',
  storageBucket: 'beastartoo.appspot.com',
  messagingSenderId: '1034800861626',
  appId: '1:1034800861626:web:f26d71bdb58ae92fdd8d83',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
  webClientId:
    '1034800861626-944780hrr67vkgu1144bjjv8oki5mosh.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => App);
