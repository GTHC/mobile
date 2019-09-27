// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Login from './Login';
import { configureStore } from '../redux/utils/store';

type Props = any;

export default class App extends Component<Props> {
  render() {
    const { store } = configureStore();

    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}
