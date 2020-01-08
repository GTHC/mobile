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
import ViewMoreText from 'react-native-view-more-text';

// Fake data for testing
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

  renderSimpleListItem = (primary, secondary, time) => (
    <ListItem style={styles.listItem}>
      <Body>
      <Text style={styles.time}>{moment(time).format('MMM Do YYYY, h:mm a')}</Text>
        <Text style={styles.title}>{primary}</Text>
        <ViewMoreText numberOfLines={3}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess} textStyle={{textAlign: 'left', paddingLeft: 10}}>
        <Text style={styles.message}>{secondary}</Text>
        </ViewMoreText>
      </Body>
    </ListItem>
  )

  renderViewMore(onPress){
    return(
      <Text style={styles.toggleTextView} onPress={onPress}>View more</Text>
    )
  }
  renderViewLess(onPress){
    return(
      <Text style={styles.toggleTextView} onPress={onPress}>View less</Text>
    )
  }




  render() {
    return (
      <View style={styles.notesContainer}>
        <FlatList
          data={this.props.notifications.announcements.reverse()}
        //   data={ANNOUNCEMENTS}
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
  toggleTextView: {
      fontSize: 12,
      color:'blue',
      paddingTop: 10,
  }
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