// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, View, FlatList} from 'react-native';
import { Title } from 'native-base';
import { getNotifications} from '../redux/actions/notifications';
import moment from 'moment';
import {
  Text,
  List,
  ListItem,
  Body,
} from 'native-base';

const NOTIFICATIONS = [{"status":"SUCCESS",
 "message":"Notifications for user with netid ssh50 found.",
 "data":{
 	"notifications": [
 		{"id":75,"notification_id":"693b18a6-0703-4511-8bde-798f14db792a","start_time":"2020-01-09T09:20:00.000Z","title":"Upcoming Shift Reminder","content":"Hey! Your tent shift in K-Ville starts in 10 minutes!","user_id":31,"created_at":"2020-01-06T00:45:09.549Z","updated_at":"2020-01-06T00:45:09.549Z"}, {"id":75,"notification_id":"693b18a6-0703-4511-8bde-798f14db792a","start_time":"2020-01-09T09:20:00.000Z","title":"Upcoming Shift Reminder","content":"Hey! Your tent shift in K-Ville starts in 10 minutes!","user_id":31,"created_at":"2020-01-06T00:45:09.549Z","updated_at":"2020-01-06T00:45:09.549Z"}, {"id":75,"notification_id":"693b18a6-0703-4511-8bde-798f14db792a","start_time":"2020-01-09T09:20:00.000Z","title":"Upcoming Shift Reminder","content":"Hey! Your tent shift in K-Ville starts in 10 minutes!","user_id":31,"created_at":"2020-01-06T00:45:09.549Z","updated_at":"2020-01-06T00:45:09.549Z"}],
 	"announcements": [
 		{"id":1,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement. This is a line monitor announcement.  ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}, {"id":2,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}, {"id":3,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}, {"id":4,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}]
 	}
 }];

 const ANNOUNCEMENTS = NOTIFICATIONS[0].data.announcements;

class UserAnnouncements extends Component {
  constructor(props) {
    super(props);
    this.props.getNotifications();
  }

  // Ansh to Vinit: I don't know what this code does so I commented it out.
  // item = ({ title }) => {
  //   return (
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{title}</Text>
  //     </View>
  //   );  
  // }

  

  renderSimpleListItem = (primary, secondary, time) => (
    <ListItem style={styles.listItem}>
      <Body>
      <Text style={styles.time}>{moment(time).format('MMM Do YYYY, h:mm a')}</Text>
        <Text style={styles.title}>{primary}</Text>
        <Text style={styles.message}>{secondary}</Text>
      </Body>
    </ListItem>
  )


  render() {
    return (
      <View style={styles.notesContainer}>
        <FlatList
          data={this.props.notifications.announcements}
          // data={ANNOUNCEMENTS}
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
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "500"
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
    marginBottom: 5
    
    // textAlign:'right'
  },
});


const mapStateToProps = state => ({
  user: state.user,
  notifications: state.notifications,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNotifications,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserAnnouncements);