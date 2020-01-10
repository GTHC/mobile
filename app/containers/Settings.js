// @flow

import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTeam } from '../redux/actions/team';
import { updateUser, logout } from '../redux/actions/user';

// UI
import UserSettings from '../components/UserSettings';
import TeamSettings from '../components/TeamSettings';

class Settings extends Component {
  renderButton = () => (
    <Text style={styles.buttonText}>
      {'Logout'.toUpperCase()}
    </Text>
  )

  onLogoutPressed = () => {
    this.props.logout();
  }

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
        <View style={styles.logoutField}>
          <TouchableHighlight
            underlayColor="white"
            onPress={() => this.onLogoutPressed()}
          >
            <View style={styles.logoutButton}>
              {this.renderButton()}
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logoutField: {
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35,
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: '#0577B1',
  },
  buttonText: {
    fontSize: 16,
    padding: 15,
    color: 'white',
  },
});

const mapStateToProps = state => ({
  user: state.user,
  team: state.team,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTeam,
      updateUser,
      logout,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
