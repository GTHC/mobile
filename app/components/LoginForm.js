// @flow

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { auth, session } from '../utils/login';
import { Logo, SignIn } from '../utils/images';

export default class LoginForm extends Component {
  renderButton = () => (
    <Image
      source={SignIn}
      resizeMode="contain"
      style={{ width: '100%', height: 70 }}
    />
  )

  handleLoginPress = () => {
    auth().then(res => {
      const { idToken } = res;
      const { getUserFromToken } = this.props;

      session('auth', idToken);
      getUserFromToken();
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >

            <View style={styles.welcomeContainer}>
              <View style={styles.logoWrapper}>
                <Image source={Logo} style={{ width: 160, height: 160 }} />
              </View>

              <View style={styles.welcomeTitleWrapper}>
                <Text style={styles.welcomeText}>Welcome to GTHC</Text>
              </View>

              <View style={styles.welcomeSubTitleWrapper}>
                <Text style={styles.welcomeSubTitleText}>Tenting made easy</Text>
              </View>
            </View>


            <View style={styles.loginContainer}>
              <View style={styles.signinField}>
                <TouchableHighlight
                  underlayColor="white"
                  onPress={this.handleLoginPress}
                >
                  {this.renderButton()}
                </TouchableHighlight>
              </View>
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    flexDirection: 'column',
    backgroundColor: '#FCFCFC',
  },
  welcomeContainer: {
    flexDirection: 'column',
  },
  logoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcomeTitleWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeSubTitleWrapper: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    color: '#0577B1',
  },
  welcomeSubTitleText: {
    color: '#AAAAAA',
    fontSize: 15,
  },
  loginContainer: {
    flexDirection: 'column',
    marginTop: 35,
  },
  buttonText: {
    fontSize: 16,
    padding: 15,
    color: 'white',
  },
});
