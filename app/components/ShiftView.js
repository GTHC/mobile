import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import moment from 'moment';
import { Title, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ShiftView extends Component {
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

  render() {
    const { title, start, end, note, users } = this.props.route.params.shift;
    const formatTime = this.props.format24h ? 'HH:mm' : 'hh:mm A';
    return (
      <View style={styles.container}>
        <Title numberOfLines={2} style={styles.title}>
          {title}
        </Title>

        <Title style={styles.subTitle}>
          <Ionicons name="ios-clock" size={25} color="black" />
          {'   '}
                Time
        </Title>

        <Text style={styles.eventTimes}>
          {moment(start).format('MMMM Do YYYY')}
        </Text>

        <Text style={styles.eventTimes}>
          {`${moment(start).format(formatTime)} - ${moment(end).format(formatTime)}`}
        </Text>

        <Text style={styles.eventTimes}>
          {moment(end).fromNow()}
        </Text>

        <Title style={styles.subTitle}>
          <Ionicons name="ios-paper" size={25} color="black" />
          {'   '}
           Notes
        </Title>

        <Text style={styles.text}>
          {note}
        </Text>

        <Title style={styles.subTitle}>
          <Ionicons name="ios-person" size={25} color="black" />

          {'   '}
           Users
        </Title>

        <View style={styles.attendees}>
          { this.renderShiftAttendees(users)}
        </View>
      </View>
    );
  }
}
export default ShiftView;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 25,
    fontWeight: '400',
    marginBottom: 5,
    marginTop: 10,
  },
  text: {
    color: '#767676',
    marginLeft: 38,
    fontWeight: '300',

  },
  eventTimes: {
    color: '#767676',
    marginLeft: 38,
    fontWeight: '300',
  },
  subTitle: {
    marginBottom: 5,
    marginTop: 10,
    fontWeight: '300',
    fontSize: 22,
  },
  avatarContainer: {
    flexDirection: 'row',
  },
  attendees: {
    marginLeft: 20,
  },
  avatarName: {
    alignSelf: 'center',
    marginLeft: 4,
  },
});

export { ShiftView };
