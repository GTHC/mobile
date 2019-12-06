// @flow

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator';

const MainStack = createSwitchNavigator({
  App: {
    screen: BottomTabNavigator,
  },
});

export default MainStack;
