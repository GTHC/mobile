// @flow

import {routerReducer, routerMiddleware} from 'react-router-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunkMiddleware from 'redux-thunk';

import * as allReducers from '../reducers';

const config = {
  key: 'test',
  storage: AsyncStorage,
};

const reducer = {
  ...allReducers,
  router: routerReducer,
};

const reducers = persistCombineReducers(config, reducer);
const middleware = routerMiddleware();
const enhancer = compose(applyMiddleware(middleware, thunkMiddleware));

function configureStore() {
  const store = createStore(reducers, undefined, enhancer);
  const persistor = persistStore(store);

  return {store, persistor};
}

export {configureStore};
