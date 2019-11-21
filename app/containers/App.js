// @flow

import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
// import Login from './Login';
import UpcomingShifts from './UpcomingShifts';
import SettingsTabs from './SettingsTabs';
import TeamSettings from './TeamSettings';
import EditTeamSettings from './EditTeamSettings';
import EditUserSettings from './EditUserSettings';
import Footer from './Footer';
import { configureStore } from '../redux/utils/store';

import { NativeRouter, Route, Link } from 'react-router-native';
// import Home from './UpcomingShifts';

type Props = any;

export default class App extends Component<Props> {
  render() {
    const { store } = configureStore();

    return (
      <Provider store={store}>
        <NativeRouter>
          <Route exact path="/" component={SettingsTabs} />
          <Route exact path={'/shifts'} component={UpcomingShifts} />
          <Route exact path={'/editteamsettings'} component={EditTeamSettings} />
          <Route exact path={'/editusersettings'} component={EditUserSettings} />
        </NativeRouter>
      </Provider>
    );
  }
}
