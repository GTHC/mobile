// @flow

import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';
import { Provider } from 'react-redux';
import { NavigationNativeContainer } from '@react-navigation/native';
import Config from 'react-native-config';
import { configureStore } from '../redux/utils/store';
import AppNavigator from '../navigation/AppNavigator';

export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init(Config.ONE_SIGNAL_TOKEN, { kOSSettingsKeyAutoPrompt: true });

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = (notification) => {
    // TODO(vinit): Implement
    console.log("Notification received: ", notification);
  }

  onOpened = (openResult) => {
    // TODO(vinit): Implement
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds = (device) => {
    // TODO(vinit): Implement
    console.log('Device info: ', device);
  }

  render() {
    const { store } = configureStore();

    return (
      <NavigationNativeContainer>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </NavigationNativeContainer>
    );
  }
}
