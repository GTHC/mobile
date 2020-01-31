import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import {
  Text,
  List,
  ListItem,
  Body,
} from 'native-base';
import { FirstTimeUserInfo } from "react-native-catch-first-time";
import { DeviceInfo } from "react-native-device-info";


export default class AppIntro extends Component{
    constructor(props){
        super(props);


    }



    render() {
        return(
            <View>

              <View>
                <Text>
                  Please read the following information if this is your first time using GTHC.
                </Text>
                <Text>
                  Some of the features such as filling out your availibility and schedule automation are only availible on the web version of GTHC.
                </Text>
                <Text>
                  The purpose of this mobile app is for shift reminder notifications, line monitor announcements, and a read-only view of all your team's shifts.
                </Text>
                <Text>
                  Please logon to the web version to fully utilize all the features built into GTHC.
                </Text>
                <View>
                    <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
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