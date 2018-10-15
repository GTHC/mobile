// @flow

import { createBottomTabNavigator } from 'react-navigation'; // eslint-disable-line no-unused-vars
import { Personal, Group, Settings, Availability } from './HomeTabs'; // eslint-disable-line no-unused-vars
import Login from './Auth/Login';

export default Login;

// TODO(anesu): Add icons for the tabs
// export default createBottomTabNavigator({
//   Personal,
//   Group,
//   Settings,
//   Availability,
// });
