// @flow

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeamCalendar from '../containers/Calendar';
import UpcomingShifts from '../containers/UpcomingShifts';
import SettingsTabs from '../containers/SettingsTabs';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calendar" component={TeamCalendar} />
      <Tab.Screen name="My Shifts" component={UpcomingShifts} />
      <Tab.Screen name="Settings" component={SettingsTabs} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
