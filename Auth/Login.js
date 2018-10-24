// @flow

import React from 'react';

import { View, StyleSheet } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { Spinner } from 'native-base';
import { isSignedInWithGoogle, signInWithGoogle, signInWithFirebase } from './utils';

type Props = any;
type State = {
  isSignedIn: boolean,
  userInfo: any,
  loading: boolean,
};

export default class Login extends React.Component<Props, State> {
  state: State;

  componentWillMount() {
    this.setState({
      loading: false,
    });
  }

  firebaseLogin = (userInfoPromise: Promise<any>) => {
    this.setState({ loading: true });

    userInfoPromise.then(userInfo => {
      const { idToken, accessToken } = userInfo;
      signInWithFirebase(idToken, accessToken)
        .then(user => {
          this.setState({ loading: false });

          const { navigation } = this.props;
          const { navigate } = navigation;

          if (user) {
            navigate('Home');
          }
        })
        .catch(() => {
          this.setState({ loading: false });
          // TODO(anesu): Add msg
        });
    });
  };

  onSignInClicked = () => {
    let userInfoPromise = isSignedInWithGoogle();

    if (userInfoPromise) {
      this.firebaseLogin(userInfoPromise);
    } else {
      userInfoPromise = signInWithGoogle();

      if (userInfoPromise) {
        this.firebaseLogin(userInfoPromise);
      } else {
        // TODO(anesu): Add error message
      }
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {loading && (
          <View>
            <Spinner color="black" />
          </View>
        )}
        <GoogleSigninButton
          style={styles.google_sign_in}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.onSignInClicked}
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
