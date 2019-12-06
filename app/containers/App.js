// @flow

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {NavigationNativeContainer} from '@react-navigation/native';
import {configureStore} from '../redux/utils/store';
import UpcomingShifts from './UpcomingShifts';
import TeamCalendar from './TeamCalendar';
import AppNavigator from '../navigation/AppNavigator';

type Props = any;

export default class App extends Component<Props> {
  render() {
    const {store} = configureStore();

    return (
      <NavigationNativeContainer>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </NavigationNativeContainer>
    );
  }
}
