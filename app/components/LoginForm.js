// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { auth, session } from '../utils/login';

export default class LoginForm extends Component {
  handleLoginPress = () => {
    auth().then(res => {
      const { idToken } = res;
      const { navigation } = this.props;

      session('auth', idToken);
      navigation.navigate('Home');
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
