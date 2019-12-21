import React, {Component} from 'react';
import {Container, Content, Tab, Tabs} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TeamSettings from '../settings/TeamSettings';
import UserSettings from '../settings/UserSettings';

import {checkSession} from '../redux/actions/user';

class Settings extends Component {
  componentWillMount() {
    this.props.checkSession();
  }

  render() {
    console.log('user', this.props.user.data);
    return (
      <Container>
        <Content>
          <Tabs>
            <Tab style={{backgroundColor: '#00adf5'}} heading="User">
              <UserSettings />
            </Tab>
            <Tab style={{backgroundColor: '#00adf5'}} heading="Team">
              <TeamSettings />
            </Tab>
          </Tabs>
        </Content>
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
      checkSession,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
