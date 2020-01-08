// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserFromToken } from '../redux/actions/user';

// UI
import LoadingScreen from '../components/LoadingScreen';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  render() {
    const { navigation, user } = this.props;
    return user.isLoading ? <LoadingScreen /> : <LoginForm navigation={navigation} getUserFromToken={this.props.getUserFromToken} />;
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUserFromToken,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
