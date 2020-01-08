// @flow

import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {
  Text,
  ListItem,
  Body,
} from 'native-base';
import moment from 'moment';


export default class UserNotifications extends Component {
  renderSimpleListItem = (primary, secondary, time) => (
    <ListItem style={styles.listItem}>
      <Body>
        <Text style={styles.time}>{moment(time).format('MMM Do, YYYY. h:mm a')}</Text>
        <Text style={styles.title}>{primary}</Text>
        <Text style={styles.message}>{secondary}</Text>
      </Body>
    </ListItem>
  )


  render() {
    return (
      <View style={styles.notesContainer}>
        <FlatList
          data={this.props.notifications.notifications}
          renderItem={({ item }) => (
            this.renderSimpleListItem(item.title, item.content, item.start_time)
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  message: {
    color: '#808080',
  },
  listItem: {
    paddingVertical: 4,
  },
  time: {
    fontWeight: '200',
    fontSize: 12,
    marginBottom: 5,
  },
});
