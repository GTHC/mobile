// @flow

import React, {PureComponent} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {auth, session} from '../utils/login';

export default class LoginForm extends PureComponent {
  handleLoginPress = () => {
    auth().then(res => {
      const {idToken} = res;
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
