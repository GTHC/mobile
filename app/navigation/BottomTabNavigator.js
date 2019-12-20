// @flow

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeamCalendar from '../containers/Calendar';
import UpcomingShifts from '../containers/UpcomingShifts';
import Notifications from '../containers/Notifications';
import Dashboard from '../containers/Dashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Calendar') {
            iconName = 'ios-calendar';
          } else if (route.name === 'Dashboard') {
            iconName = 'ios-keypad';
          } else if (route.name === 'My Shifts') {
            iconName = 'ios-apps';
          } else if (route.name === 'Notifications') {
            iconName = 'ios-notifications';
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Calendar" component={TeamCalendar} />
      <Tab.Screen name="My Shifts" component={UpcomingShifts} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
