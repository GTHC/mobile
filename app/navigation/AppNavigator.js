// @flow

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import Login from '../containers/Login';
import SettingsTabs from '../containers/SettingsTabs';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={({route}) => ({
          title: 'GTHC',
          headerRight: () => (
            <Icon.Button
              backgroundColor={mainHeader.headerStyle.backgroundColor}
              name="ios-settings"
              size={24}
              color="white"
            />
          ),
          ...mainHeader,
        })}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Settings" component={SettingsTabs} />
    </Stack.Navigator>
  );
}

const mainHeader = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default AppNavigator;
