import React, { Component } from 'react';
import { Container, Content, Tab, Tabs } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TeamSettings from '../settings/TeamSettings';
import UserSettings from '../components/UserSettings';

import { getUserFromToken } from '../redux/actions/user';
import { getTeam } from '../redux/actions/team';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.props.getUserFromToken();
  }

  render() {
    const { user } = this.props;

    return (
      <Container>
        <UserSettings user={user} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUserFromToken,
      getTeam,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
