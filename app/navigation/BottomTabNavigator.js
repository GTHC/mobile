// @flow

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeamCalendar from '../containers/TeamCalendar';
import UpcomingShifts from '../containers/UpcomingShifts';
import SettingsTabs from '../containers/SettingsTabs';
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
          } else if (route.name === 'Settings') {
            iconName = 'ios-settings';
          } else if (route.name === 'Shifts') {
            iconName = 'ios-apps';
          }
          return <Ionicons name={iconName} size={25} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Calendar" component={TeamCalendar} />
      <Tab.Screen name="Shifts" component={UpcomingShifts} />
      <Tab.Screen name="Settings" component={SettingsTabs} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
