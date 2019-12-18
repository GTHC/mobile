// @flow

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeamCalendar from '../containers/Calendar';
import UpcomingShifts from '../containers/UpcomingShifts';
import Notifications from '../containers/Notifications';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Calendar"
        component={TeamCalendar}
        options={{
          title: 'Team Calendar',
        }}
      />
      <Tab.Screen name="My Shifts" component={UpcomingShifts} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
