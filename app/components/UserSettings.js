/* eslint-disable react/no-unused-state */
// @flow

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  List,
  ListItem,
  Body,
  Right,
  Switch,
} from 'native-base';


export default class UserSettings extends Component {
  renderSimpleListItem = (primary, secondary) => (
    <ListItem style={styles.listItem}>
      <Body>
        <Text style={styles.primaryText}>{primary}</Text>
        <Text style={styles.secondaryText}>{secondary}</Text>
      </Body>
    </ListItem>
  )

  renderSwitchItem = (primary, secondary, label) => (
    <ListItem style={styles.listItem}>
      <Body>
        <Text style={styles.primaryText}>{primary}</Text>
        <Text style={styles.secondaryText}>{secondary}</Text>
      </Body>
      <Right>
        <Switch
          value={this.props.user.data[label]}
          onValueChange={val => this.onSwitchChange(label, val)}
        />
      </Right>
    </ListItem>
  )

  onSwitchChange = (label, value) => {
    const { user, updateUser } = this.props;
    const updatedUserData = {};
    updatedUserData[label] = value;

    updateUser(user.data.id, updatedUserData);
  }

  render() {
    const { user } = this.props;



    return (
      <View>
        <List>
          {this.renderSimpleListItem('Name', user.data.name)}
          {this.renderSimpleListItem('NetId', user.data.netid)}
          {this.renderSimpleListItem('Email', user.data.email)}
          {this.renderSimpleListItem('Phone number', user.data.phone)}
          {this.renderSwitchItem('Line monitor notifications',
            'Get alerts from line monitors about events and news',
            'enable_announcement_notifications')}
          {this.renderSwitchItem('Upcoming shifts notifications',
            'Get alerts when your shifts are coming up',
            'enable_shift_notifications')}
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 4,
  },
  primaryText: {
  },
  secondaryText: {
    color: '#767676',
  },
});
