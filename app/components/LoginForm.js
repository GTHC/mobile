// @flow

import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

type Props = {
  loginUser: any,
};

type State = {
  pass: string,
  email: string,
};

export default class LoginForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    };
  }

  state: State;

  handleLoginPress = () => {
    const { email, pass } = this.state;
    const data = { email, password: pass };
    this.props.loginUser(data);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          keyboardType="email-address"
          placeholder="Email"
        />

        <TextInput
          style={styles.text}
          value={this.state.pass}
          onChangeText={pass => this.setState({ pass })}
          placeholder="Password"
          secureTextEntry
        />

        <Button title="Login" onPress={this.handleLoginPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    height: 60,
  },
});
