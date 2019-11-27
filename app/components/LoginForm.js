// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { authorize, prefetchConfiguration } from 'react-native-app-auth';
import Config from 'react-native-config';
import { storeData as session } from '../utils/Storage';

type Props = {};

type State = {};

const config = {
  serviceConfiguration: {
    authorizationEndpoint: Config.AUTH_ENDPOINT,
    tokenEndpoint: Config.TOKEN_ENDPOINT,
  },
  issuer: Config.ISSUER,
  clientId: Config.CLIENT_ID,
  clientSecret: Config.CLINT_SECRET,
  redirectUrl: Config.REDIRECT_URL,
  warmAndPrefetchChrome: true,
};
prefetchConfiguration(config);

export default class LoginForm extends Component<Props, State> {
  state: State;

  handleLoginPress = () => {
    authorize(config).then(res => {
      const { idToken } = res;
      session('auth', idToken);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login" onPress={this.handleLoginPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
