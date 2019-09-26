// @flow

import React, { Component } from 'react';

// redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// reducers
import * as allReducers from './reducers';

// ui
import App from './containers/App';

const store = createStore(combineReducers(allReducers));

type Props = {}; // TODO: Add props

export default class GTHC extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
