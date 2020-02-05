// @flow


import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import {
  Text,
} from 'native-base';
import { AppIntroPic } from '../utils/images';


export default class AppIntro extends Component {
  exit = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.titleText}>
              Please Read Info
          </Text>
          <Text style={styles.subTitle}>Especially if this is your first time using GTHC</Text>
          <Image source={AppIntroPic} resizeMode="contain" style={{ width: '100%', height: '50%' }} />
          <Text style={styles.text}>
Some of the features such as filling out your availibility and schedule automation
 are only availible on the web version of GTHC.
          </Text>
          <Text style={styles.text}>
              The purpose of this mobile app
        is for shift reminder notifications, line monitor announcements
        , and a read-only view of all your teams shifts.
          </Text>
          <Text style={styles.text}>
              Please logon to the web version at https://gthc.io/ to fully utilize all the features built into GTHC.
          </Text>
          <TouchableHighlight
            onPress={this.exit}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 10,
    flex: 1,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 10,
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 10,
    textAlign: 'center',
  },
  body: {
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0577B1',
  },
  buttonText: {
    fontSize: 16,
    padding: 15,
    color: 'white',
  },
  text: {
    paddingBottom: 10,
  },
});
