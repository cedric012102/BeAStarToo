import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigator from './src/navigation/home-bottom-tab-navigator';
import CreatePost from './src/screens/create-post';
import LoginScreen from './src/screens/login';
import AddStoryScreen from './src/screens/add-story-screen';
import ForeignUserProfilePage from './src/screens/foreign-user-profile';

// import { withAuthenticator } from 'aws-amplify-react-native'
// import {Auth, API, graphqlOperation} from '@aws-amplify/auth';

// import {createUser} from './src/graphql/mutations';
// import { getUser } from './src/graphql/queries';

// const randomImages = [
//   'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
//   'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
//   'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
//   'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
// ];

// const getRandomImage = () => {
//   return randomImages[Math.floor(Math.random() * randomImages.length)];
// };

const Stack = createStackNavigator();

export default function App() {
  // useEffect( () => {
  //   const fetchUser = async () => {
  //     // get currently authenticated user
  //     const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true});
  //     if (!userInfo) {
  //       return;
  //     }
  //     //check if user exists in database
  //    const getUserResponse = await API.graphQl(graphqlOperation(
  //      getUser, { id: userInfo.attributes.sub }
  //     )
  //    );

  //    if (getUserResponse.data.getUser) {
  //      console.log("User already exists in database")
  //      return;
  //    }
  //     //if not (new registered user)
  //     //then, create a new user in database
  //     const newUser ={
  //       id: userInfo.attributes.sub,
  //       username: userInfo.username,
  //       email: userInfo.attributes.email,
  //       imageUri: getRandomImage(),
  //     };

  //     await API.graphQl(graphqlOperation(createUser,
  //       { input: newUser}
  //       )
  //     )
  //   };

  //   fetchUser();
  // }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={'Login'}
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
            <Stack.Screen
              name="CreatePost"
              component={CreatePost}
              options={{
                headerShown: true,
                title: 'Post',
              }}
            />
            <Stack.Screen name="AddStory" component={AddStoryScreen} />
            <Stack.Screen
              name="ForeignUserProfile"
              component={ForeignUserProfilePage}
              options={{
                headerShown: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

//after typing amplify console api, select mutations, press + sign, type for example addUser, select for example, createUser, select fields that are neeeded like email and username

//vector icons ios - copy list of available fonts, go to ios, app name, info plist, and paste below false, then run npx pod-install
//vector icons android - copy "apply from" line and go to android, app, build.gradle and paste under other "apply from" line.
//rtc bride error. add #import <React/RCTDevLoadingView.h> //#if RCT_DEV
//under rtc bridge, add #if RCT_DEV[bridge moduleForClass:[RCTDevLoadingView class]]; #endif
