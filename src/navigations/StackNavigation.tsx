import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';

// Screens
import Home from 'screens/Home';
import Login from 'screens/Login';
import PostDetails from 'screens/PostDetails';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../libs/styles';

const Stack = createStackNavigator();

const navigatorOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.green,
  },
  headerTitleStyle: {
    color: colors.secondary,
  },
  headerBackImage: () => (
    <Ionicons name="arrow-back" size={25} color={colors.white} />
  ),
};

const loginScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

const homeScreenOptions: StackNavigationOptions = {
  headerTitle: 'Burmese Agriculture',
};

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={loginScreenOptions}
      />
      <Stack.Screen name="Home" component={Home} options={homeScreenOptions} />
      <Stack.Screen name="PostDetails" component={PostDetails} />
    </Stack.Navigator>
  );
}
