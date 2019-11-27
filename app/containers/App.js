// @flow

import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
// import Login from './Login';
import UpcomingShifts from './UpcomingShifts';
import SettingsTabs from './SettingsTabs';
import EditTeamSettings from '../settings/EditTeamSettings';
import EditUserSettings from '../settings/EditUserSettings';
import Dashboard from './Dashboard';
import Notifications from './Notifications';
import { configureStore } from '../redux/utils/store';

import { NativeRouter, Route, Link } from 'react-router-native';

type Props = any;

export default class App extends Component<Props> {
  render() {
    const { store } = configureStore();

    return (
      <Provider store={store}>
        <NativeRouter>
          <Route exact path="/" component={Dashboard} />
          <Route exact path={'/notify'} component={Notifications} />
          <Route exact path={'/shifts'} component={UpcomingShifts} />
          <Route exact path={'/settings'} component={SettingsTabs} />
          <Route exact path={'/editteamsettings'} component={EditTeamSettings} />
          <Route exact path={'/editusersettings'} component={EditUserSettings} />
        </NativeRouter>
      </Provider>
    );
  }
}
