// @flow

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeamCalendar from '../containers/Calendar';
import UpcomingShifts from '../containers/UpcomingShifts';
import Notifications from '../containers/Notifications';
import Dashboard from '../containers/Dashboard';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Calendar" component={TeamCalendar} />
      <Tab.Screen name="My Shifts" component={UpcomingShifts} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
