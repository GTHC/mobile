// @flow

import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {
  Text,
  ListItem,
  Body,
} from 'native-base';
import moment from 'moment';
import ViewMoreText from 'react-native-view-more-text';

export default class UserAnnouncements extends Component {
  renderSimpleListItem = (primary, secondary, time) => (
    <ListItem style={styles.listItem}>
      <Body>
        <Text style={styles.time}>{moment(time).format('MMM Do, YYYY. h:mm a')}</Text>
        <Text style={styles.title}>{primary}</Text>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{ textAlign: 'left', paddingLeft: 10 }}
        >
          <Text style={styles.message}>{secondary}</Text>
        </ViewMoreText>
      </Body>
    </ListItem>
  )

  renderViewMore = (onPress) => (
    <Text style={styles.toggleTextView} onPress={onPress}>View more</Text>
  )

  renderViewLess = (onPress) => (
    <Text style={styles.toggleTextView} onPress={onPress}>View less</Text>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.notifications.announcements.reverse()}
          renderItem={({ item }) => (
            this.renderSimpleListItem(item.title, item.body, item.created_at)
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  toggleTextView: {
    fontSize: 12,
    color: 'blue',
    paddingTop: 10,
  },
});
