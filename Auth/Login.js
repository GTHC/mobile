// @flow

import React from 'react';

import { View, StyleSheet } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

type Props = {};
type State = any;

export default class Login extends React.Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);
    GoogleSignin.configure();
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo }); // eslint-disable-line react/no-unused-state
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GoogleSigninButton
          style={styles.google_sign_in}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  google_sign_in: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 312,
    height: 48,
    position: 'absolute',
    bottom: 32,
  },
});
