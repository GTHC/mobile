// @flow

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
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

      return (
        <View>
          <List>
            {this.renderSimpleListItem('Team Name', team.data.name)}
            {this.renderSimpleListItem('Tent Type', team.data.tent_type)}
            {this.renderSimpleListItem('Team passcode', team.data.passcode)}
            {this.renderSimpleListItem('Announcements/Notifications', 'To adjust these preferences, please navigate to User Profile on web to make your changes.')}
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
