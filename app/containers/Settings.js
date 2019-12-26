import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTeam } from '../redux/actions/team';

// UI
import UserSettings from '../components/UserSettings';
import TeamSettings from '../components/TeamSettings';

class Settings extends Component {
  render() {
    const { user, team } = this.props;

    return (
      <Container>
        <UserSettings user={user} />
        <TeamSettings
          user={user}
          team={team}
          getTeam={this.props.getTeam}
        />
      </Container>
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
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
