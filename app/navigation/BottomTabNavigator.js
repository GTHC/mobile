// @flow

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TeamCalendar from '../containers/Calendar';
import UpcomingShifts from '../containers/UpcomingShifts';
import Notifications from '../containers/Notifications';
import { storeData } from '../utils/Storage';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  storeData('isFirstTimeLogin', 'NO');
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Calendar') {
            iconName = 'ios-calendar';
          } else if (route.name === 'My Shifts') {
            iconName = 'ios-apps';
          } else if (route.name === 'Notifications') {
            iconName = 'ios-notifications';
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Calendar" component={TeamCalendar} />
      <Tab.Screen name="My Shifts" component={UpcomingShifts} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
