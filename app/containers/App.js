// @flow

import React, { Component } from 'react';

// import { createBottomTabNavigator } from 'react-navigation';

// ui
// import { Personal, Group, Settings, Availability } from '../components/HomeTabs';
import Login from './Login';

// const Home = createBottomTabNavigator({
//   Personal,
//   Group,
//   Settings,
//   Availability,
// });

type Props = {}; // TODO: Add props

export default class App extends Component<Props> {
  render() {
    return <Login />;
  }
}
