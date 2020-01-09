// @flow

import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNotifications } from '../redux/actions/notifications';
import UserAnnouncements from '../components/UserAnnouncements';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.props.getNotifications();
  }

  onRefresh = () => {
    this.props.getNotifications();
  }

  render() {
    const { user, notifications } = this.props;
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: 'white' }}
        refreshControl={
          <RefreshControl refreshing={notifications.isLoading} onRefresh={this.onRefresh} />}
      >
        <UserAnnouncements
          user={user}
          notifications={notifications}
        />
      </ScrollView>
    );
  }
}

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
