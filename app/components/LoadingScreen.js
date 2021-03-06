// @flow

import React, { PureComponent } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

export default class LoadingScreen extends PureComponent {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#f4511e" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
