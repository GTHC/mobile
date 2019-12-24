// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

// UI
import LoadingScreen from '../components/LoadingScreen';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  render() {
    const { navigation, user } = this.props;
    return user.isLoading ? <LoadingScreen /> : <LoginForm navigation={navigation} />;
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  null,
)(Login);
