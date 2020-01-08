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

class UserNotifications extends Component {
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
      console.log(this.props.notifications.notifications);
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
)(UserNotifications);