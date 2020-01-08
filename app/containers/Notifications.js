// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNotifications } from '../redux/actions/notifications';
import UserAnnouncements from '../components/UserAnnouncements';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.props.getNotifications();
  }

  render() {
    const { user, notifications } = this.props;
    return (
      <UserAnnouncements
        user={user}
        notifications={notifications}
      />
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
