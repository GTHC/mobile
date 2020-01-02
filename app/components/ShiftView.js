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
import Ionicons from 'react-native-vector-icons/Ionicons';

class ShiftView extends Component {
  constructor(props) {
    super(props);
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
              <Title numberOfLines={2} style={styles.title}>
                {this.props.route.params.shift.title}
              </Title>
              <Title style={styles.subTitle}>
              <Ionicons name={'ios-clock'} size={25} color={'black'} /> 
              {'   '}
                Timings
              </Title>
              {/* <Ionicons name={'ios-calendar'} size={25} color={'black'} /> */}
              <Text style={styles.eventTimes}>
                {moment(this.props.route.params.shift.start).format('MMMM Do YYYY')}
              </Text>
              <Text style={styles.eventTimes}>
                {moment(this.props.route.params.shift.start).format(formatTime)}
                {' '}
-
                {' '}
                {moment(this.props.route.params.shift.end).format(formatTime)}
              </Text>
              <Text style={styles.eventTimes}>
              {moment(this.props.route.params.shift.end).fromNow()}
              </Text>
              <Title style={styles.subTitle}>
              <Ionicons name={'ios-paper'} size={25} color={'black'} /> 
              
              {'   '}
                Notes
              </Title>
              <Text style={styles.text}>
                
                {this.props.route.params.shift.note}
                
              </Text>
              <Title style={styles.subTitle}>
              <Ionicons name={'ios-person'} size={25} color={'black'} /> 
              
              {'   '}
                Users
              </Title>
              <View style={styles.attendees}>
                  { this.props.route.params.shift.users.map(user => <UserAvatar size="48" name={user.name}/> ) }
                  <Text>
                  {/* { this.props.route.params.shift.users.map(user => user.name) } */}
                </Text>
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
    marginBottom: 5,
    marginTop: 10
  },
  text: {
    color: '#767676',
    marginLeft: 38,
    fontWeight: '300',
    
  },
  attendees: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 38,
  },
  eventTimes: {
    color: '#767676',
    marginLeft: 38,
    fontWeight: '300',
  },
  subTitle: {
    marginBottom: 5,
    marginTop: 10
  }
});

export {ShiftView};
