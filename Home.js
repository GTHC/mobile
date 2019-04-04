// @flow

import React, { Component } from 'react';

// redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// reducers
import * as allReducers from './app/redux/reducers';

// ui
import App from './App';

const store = createStore(combineReducers(allReducers));

export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
