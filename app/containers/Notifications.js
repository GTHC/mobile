// @flow

import React, { Component } from 'react';
import { StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'native-base';
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const NOTIFICATIONS = [{"status":"SUCCESS",
"message":"Notifications for user with netid ssh50 found.",
"data":{
	"notifications": [
		{"id":75,"notification_id":"693b18a6-0703-4511-8bde-798f14db792a","start_time":"2020-01-09T09:20:00.000Z","title":"Upcoming Shift Reminder","content":"Hey! Your tent shift in K-Ville starts in 10 minutes!","user_id":31,"created_at":"2020-01-06T00:45:09.549Z","updated_at":"2020-01-06T00:45:09.549Z"}, {"id":75,"notification_id":"693b18a6-0703-4511-8bde-798f14db792a","start_time":"2020-01-09T09:20:00.000Z","title":"Upcoming Shift Reminder","content":"Hey! Your tent shift in K-Ville starts in 10 minutes!","user_id":31,"created_at":"2020-01-06T00:45:09.549Z","updated_at":"2020-01-06T00:45:09.549Z"}, {"id":75,"notification_id":"693b18a6-0703-4511-8bde-798f14db792a","start_time":"2020-01-09T09:20:00.000Z","title":"Upcoming Shift Reminder","content":"Hey! Your tent shift in K-Ville starts in 10 minutes!","user_id":31,"created_at":"2020-01-06T00:45:09.549Z","updated_at":"2020-01-06T00:45:09.549Z"}],
	"announcements": [
		{"id":1,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}, {"id":1,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}, {"id":1,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}, {"id":1,"title":"Line Monitor Announcement","body":"This is a line monitor announcement. ","created_at":"2020-01-06T03:44:57.029Z","updated_at":"2020-01-06T03:44:57.029Z"}]
	}
}];

const announcements = NOTIFICATIONS[0].data.announcements;
console.log(announcements);

export default class Notifications extends Component {
  render() {
    return (
      <View style={styles.notesContainer}>
        <FlatList
          data={announcements}
          renderItem={({ item }) => <Text style={styles.item}>{item.body}</Text>  
        }
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
