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


  render() {
    return (
      <View style={styles.notesContainer}>
        <FlatList
          data={this.props.notifications.notifications}
          
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