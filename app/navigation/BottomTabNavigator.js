// @flow

import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from '../containers/Login';
import UpcomingShifts from '../containers/UpcomingShifts';

const BottomTabNavigator = createBottomTabNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login',
    },
  },
  Shifts: {
    screen: UpcomingShifts,
    navigationOptions: {
      tabBarLabel: 'Shifts',
    },
  },
});

export default BottomTabNavigator;
