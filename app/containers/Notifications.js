// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'native-base';
import { getNotifications} from '../redux/actions/notifications';

const NOTIFICATIONS = [{"status":"SUCCESS",
 "message":"Notifications for user with netid ssh50 found.",
 "data":{
 	"notifications": [
 		{"id":75,"notification_id":"693b18a6-0703-4511-8bde-798f14db792a","start_time":"2020-01-09T09:20:00.000Z","title":"Upcoming Shift Reminder","content":"Hey! Your tent shift in K-Ville starts in 10 minutes!","user_id":31,"created_at":"2020-01-06T00:45:09.549Z","updated_at":"2020-01-06T00:45:09.549Z"}, {"id":75,"notification_id":"693b18a6-0703-4511-8bde-798f14db792a","start_time":"2020-01-09T09:20:00.000Z","title":"Upcoming Shift Reminder","content":"Hey! Your tent shift in K-Ville starts in 10 minutes!","user_id":31,"created_at":"2020-01-06T00:45:09.549Z","updated_at":"2020-01-06T00:45:09.549Z"}, {"id":75,"notification_id":"693b18a6-0703-4511-8bde-798f14db792a","start_time":"2020-01-09T09:20:00.000Z","title":"Upcoming Shift Reminder","content":"Hey! Your tent shift in K-Ville starts in 10 minutes!","user_id":31,"created_at":"2020-01-06T00:45:09.549Z","updated_at":"2020-01-06T00:45:09.549Z"}],
 	"announcements": [
 		{"id":1,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}, {"id":1,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}, {"id":1,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}, {"id":1,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}]
 	}
 }];

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.props.getNotifications();
  }

  item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );  
  }

  renderSimpleListItem = (primary, secondary) => (
    <ListItem style={styles.container}>
      <Body>
        <Text style={styles.title}>{primary}</Text>
        <Text >{secondary}</Text>
      </Body>
    </ListItem>
  )


  render() {
    return (
      <View style={styles.notesContainer}>
        <FlatList
          data={this.props.notifications.announcements}
          renderItem={({ item }) => (this.renderSimpleListItem(item.title, item.body)
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
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
)(Notifications);