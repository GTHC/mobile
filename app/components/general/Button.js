// @flow

import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  text: string,
};

export default class EditText extends Component<Props> {
  render() {
    const { text } = this.props;
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});
