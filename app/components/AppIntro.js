// @flow


import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import {
  Text,
} from 'native-base';


export default class AppIntro extends Component {

  exit = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>

        <View>
          <Text>
              Please read the following information if this is your first time using GTHC.
          </Text>
          <Text>
Some of the features such as filling out your availibility and schedule automation
 are only availible on the web version of GTHC.
          </Text>
          <Text>
              The purpose of this mobile app
        is for shift reminder notåifications, line monitor announcements
        , and a read-only view of all your teams shifts.
          </Text>
          <Text>
              Please logon to the web version to fully utilize all the features built into GTHC.
          </Text>
          <View>
            <TouchableHighlight
              onPress={this.exit}
            >
              <View>
                <Text>Exit</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
