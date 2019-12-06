// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator';
import { configureStore } from '../redux/utils/store';
import UpcomingShifts from './UpcomingShifts';
import TeamCalendar from './TeamCalendar';

type Props = any;

export default class App extends Component<Props> {
  render() {
    const { store } = configureStore();

    return (
      <Provider store={store}>
        <TeamCalendar />
      </Provider>
    );
  }
}
