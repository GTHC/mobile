// @flow

import React, { Component } from 'react';

import { createBottomTabNavigator } from 'react-navigation';

// ui
import { Personal, Group, Settings, Availability } from './components/HomeTabs';
import Login from './Login';

const Home = createBottomTabNavigator({
  Personal,
  Group,
  Settings,
  Availability,
});

export default class App extends Component {
  render() {
    return <Login />;
  }
}
