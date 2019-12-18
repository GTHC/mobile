// @flow

import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
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
        options={({ route }) => ({
          title: 'GTHC',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => route.navigation.navigate('Settings')}
              title="Settings"
              color="#fff"
            />
          ),
        })}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Settings" component={SettingsTabs} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
