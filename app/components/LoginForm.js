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
import { Logo } from '../utils/images';

export default class LoginForm extends Component {
  renderButton = () => (
    <Text style={styles.buttonText}>
      {'Login'.toUpperCase()}
    </Text>
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
                  <View style={styles.loginButton}>
                    {this.renderButton()}
                  </View>
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
    color: '#f4511e',
  },
  welcomeSubTitleText: {
    color: '#AAAAAA',
    fontSize: 15,
  },
  loginContainer: {
    flexDirection: 'column',
    marginTop: 35,
  },
  loginButton: {
    marginHorizontal: 16,
    alignItems: 'center',
    borderRadius: 0,
    backgroundColor: '#f4511e',
  },
  buttonText: {
    fontSize: 16,
    padding: 15,
    color: 'white',
  },
});
