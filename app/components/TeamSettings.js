// @flow

import React, { Component } from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import {
  Text,
  List,
  ListItem,
  Body,
} from 'native-base';

export default class TeamSettings extends Component {
  constructor(props) {
    super(props);

    const { getTeam, user } = this.props;
    getTeam(user.data.team_id);
  }

    renderSimpleListItem = (primary, secondary) => (
      <ListItem style={styles.listItem}>
        <Body>
          <Text style={styles.primaryText}>{primary}</Text>
          <Text style={styles.secondaryText}>{secondary}</Text>
        </Body>
      </ListItem>
    )

    render() {
      const { team } = this.props;
      console.log('yeet', team);

      return (
        <View>
          <List>
            {this.renderSimpleListItem('Team Name', team.data.name)}
            {this.renderSimpleListItem('Tent Type', team.data.tent_type)}
            {this.renderSimpleListItem('Passcode', team.data.passcode)}
            {this.renderSimpleListItem('Notification Settings', 'To adjust Notifications preferences, please go to web application at https://gthc.io/')}       
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
    color: '#808080',
  },
});
