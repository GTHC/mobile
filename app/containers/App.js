// @flow

import React, {Component} from 'react';
import OneSignal from 'react-native-onesignal'; 
import {Provider} from 'react-redux';
import {NavigationNativeContainer} from '@react-navigation/native';
import {configureStore} from '../redux/utils/store';
import AppNavigator from '../navigation/AppNavigator';

<<<<<<< HEAD
type Props = any;

export default class App extends Component<Props> {
  constructor(properties) {
    super(properties);
    console.log("Hello")
    OneSignal.init("b290fd9a-eedf-44b0-8bfd-6a37646957b6", {kOSSettingsKeyAutoPrompt : true});
    console.log("Second Succeeded")

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
=======
export default class App extends Component {
>>>>>>> bacd4cc4bf46ecbeaef9baeea7744745d8181494
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

