// @flow

import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = TextInput.propTypes & {
  placeholder: string,
  secureTextEntry?: boolean,
};

export default class EditText extends Component<Props> {
  render() {
    const { placeholder, keyboardType, secureTextEntry } = this.props;
    return (
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        // onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType={keyboardType || 'default'}
        returnKeyType="next"
        placeholder={placeholder}
        placeholderTextColor="black"
        secureTextEntry={secureTextEntry || false}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#d3d3d3',
    marginBottom: 10,
    padding: 10,
    color: 'black',
  },
});
