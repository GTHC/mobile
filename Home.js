// @flow

import { createBottomTabNavigator } from 'react-navigation';
import { Personal, Group, Settings, Availability } from './HomeTabs';

// TODO(anesu): Add icons for the tabs
export default createBottomTabNavigator({
  Personal,
  Group,
  Settings,
  Availability,
});
