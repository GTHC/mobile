// @flow

import React from 'react';
import { View } from 'react-native';

import firebase from 'react-native-firebase';
import { createStackNavigator } from 'react-navigation';

import Home from '../Content/Home';
import Login from '../Auth/Login';

type Props = {
  navigation: any,
};

class Entry extends React.Component<Props> {
  props: Props;

  componentDidMount() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    if (firebase.auth().currentUser) {
      navigate('Home');
    } else {
      navigate('Login');
    }
  }

  render() {
    return <View />;
  }
}

export default createStackNavigator({
  GTHC: {
    screen: Entry,
  },
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
});
