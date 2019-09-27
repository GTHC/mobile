// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// UI
import LoginForm from '../components/LoginForm';

// Redux actions
import { login } from '../redux/actions/login';

type Props = {
  loginUser: ({}) => void,
};

class Login extends Component<Props> {
  render() {
    const { loginUser } = this.props;

    return <LoginForm loginUser={loginUser} />;
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginUser: login,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
