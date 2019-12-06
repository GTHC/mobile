/** @format */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './app/containers/App';
import Login from './app/containers/Login';

AppRegistry.registerComponent('gthc', () => App);
AppRegistry.registerComponent('Login', () => Login);
