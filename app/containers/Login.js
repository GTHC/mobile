// @flow

import React, { Component } from 'react';
import { KeyboardAvoidingView, View, StyleSheet, Image } from 'react-native';

// ui
import LoginForm from './LoginForm';

type Props = {
  // TODO(anesu): Add more accurate types
  login: any,
  user: any,
  loginUser: any,
  clearError: any,
};

export default class Login extends Component<Props> {
  render() {
    const { login, user, loginUser, clearError } = this.props;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            // eslint-disable-next-line global-require
            source={require('../assets/images/logo.png')}
          />
        </View>

        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 300,
  },
});
