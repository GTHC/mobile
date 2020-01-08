// @flow

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  List,
  ListItem,
  Body,
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

  render() {
    const { user } = this.props;

    return (
      <View>
        <List>
          {this.renderSimpleListItem('Name', user.data.name)}
          {this.renderSimpleListItem('NetId', user.data.netid)}
          {this.renderSimpleListItem('Email', user.data.email)}
          {this.renderSimpleListItem('Phone number', user.data.phone)}
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
