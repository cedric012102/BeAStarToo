import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Camera from '../screens/camera';
import Menu from '../screens/menu';
import Profile from '../screens/profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'home-circle'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={Menu}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'menu'} size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Camera}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'plus-circle'}
              size={50}
              color={color}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-arrow-left'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-circle'} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
