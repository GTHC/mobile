// @flow

import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import Login from '../containers/Login';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
