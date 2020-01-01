import React, {Component} from 'react';
import {
  Modal,
  DatePickerIOS,
  TouchableHighlight,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import moment from 'moment';
import populateEvents from '../utils/Packer';
import {
  Toast,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Title,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
} from 'native-base';
import { today, formatShifts, renderItem, renderEmptyDate, rowHasChanged, calendarModal } from '../containers/UpcomingShifts/utils';

class ShiftView extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }

  renderShiftAttendees = ({ data }) => {
    const userAvatars = data.users.map(user =>
      <UserAvatar size="32" name={user.name} />);

    return (
      <View style={styles.attendees}>
        {userAvatars}
      </View>
    );
  }

  render() {
    const formatTime = this.props.format24h ? 'HH:mm' : 'hh:mm A';
    return (
      <View style={styles.container}>
              <Title>
                {this.props.route.params.shift.title}
              </Title>
              <Title>
                Time
              </Title>
              <Text style={styles.eventTimes}>
                {moment(this.props.route.params.shift.start).format(formatTime)}
                {' '}
-
                {' '}
                {moment(this.props.route.params.shift.end).format(formatTime)}
              </Text>
              <Title>
                Notes
              </Title>
              <Text>
                {this.props.route.params.shift.note}
              </Text>
              <Title>
                Users
              </Title>
              <View style={styles.attendees}>
                { this.props.route.params.shift.users.map(user => <UserAvatar size="32" name={user.name} />) }
              </View>
      </View>
    );
  }
}
export default ShiftView;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  attendees: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
  },
});

export {ShiftView};
