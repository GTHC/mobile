// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { EditText, Button } from '../UI';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <EditText placeholder="Email" keyboardType="email-address" />

        <EditText placeholder="Password" secureTextEntry />

        <Button text="LOGIN" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
