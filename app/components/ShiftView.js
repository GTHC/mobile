import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import moment from 'moment';
import { Text } from 'native-base';

export default class ShiftView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderShiftAttendees = (users) => {
    const userAvatars = users.map(user => (
      <View style={styles.avatarContainer}>
        <UserAvatar size="32" name={user.name} />
        <Text style={styles.avatarName}>{user.name}</Text>
      </View>
    ));

    return (
      <View style={styles.attendees}>
        {userAvatars}
      </View>
    );
  }

  isEmpty = (str) => (!str || str.length === 0)

  render() {
    const { title, start, end, note, users, peopleNeeded } = this.props.route.params.shift;
    const formatTime = this.props.format24h ? 'HH:mm' : 'hh:mm A';
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: 'flex-start',
        }}
      >
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>

        {(peopleNeeded > 0) && (
          <Text style={[styles.eventTitle, { color: '#ffae42' }]} numberOfLines={1}>
            {`${peopleNeeded} people needed for shift`}
          </Text>
        )}

        <Text style={styles.subTitle}>Time</Text>
        <Text style={styles.eventTimes}>
          {moment(start).format('MMMM Do YYYY')}
        </Text>

        <Text style={styles.eventTimes}>
          {`${moment(start).format(formatTime)} - ${moment(end).format(formatTime)}`}
        </Text>

        <Text style={styles.eventTimes}>
          {moment(end).fromNow()}
        </Text>

        {!this.isEmpty(note) && (
          <Text style={styles.subTitle}>Notes</Text>
        )}
        {!this.isEmpty(note) && (
          <Text style={styles.text}>
            {note}
          </Text>
        )}

        <Text style={styles.subTitle}>Tenters Assigned</Text>
        <View style={styles.attendees}>
          { this.renderShiftAttendees(users)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  text: {
    marginLeft: 4,
    color: '#767676',
    fontWeight: '300',

  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventTimes: {
    marginLeft: 4,
    color: '#767676',
    fontWeight: '300',
  },
  subTitle: {
    marginBottom: 5,
    marginTop: 10,
    fontWeight: '500',
    fontSize: 22,
  },
  avatarContainer: {
    marginLeft: 4,
    marginBottom: 4,
    flexDirection: 'row',
  },
  avatarName: {
    alignSelf: 'center',
    marginLeft: 4,
  },
});
