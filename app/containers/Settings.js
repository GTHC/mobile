// @flow

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTeam } from '../redux/actions/team';
import { updateUser } from '../redux/actions/user';

// UI
import UserSettings from '../components/UserSettings';
import TeamSettings from '../components/TeamSettings';

class Settings extends Component {
  render() {
    const { user, team } = this.props;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <UserSettings
          user={user}
          updateUser={this.props.updateUser}
        />
        <TeamSettings
          user={user}
          team={team}
          getTeam={this.props.getTeam}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  team: state.team,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTeam,
      updateUser,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
