// @flow
import { Platform, StyleSheet } from 'react-native';

const leftMargin = 50 - 1;

export default function styleConstructor(theme = {}, calendarHeight) {
  const style = {
    container: {
      flex: 1,
      ...theme.container,
    },
    contentStyle: {
      backgroundColor: 'white',
      height: calendarHeight + 10,
      ...theme.contentStyle,
    },
    event: {
      position: 'absolute',
      backgroundColor: '#00adf5',
      opacity: 1.0,
      borderColor: '#DDE5FD',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 4,
      minHeight: 25,
      flex: 1,
      paddingTop: 5,
      paddingBottom: 0,
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: 'hidden',
      ...theme.event,
    },
    eventTitle: {
      color: 'white',
      fontWeight: '600',
      minHeight: 15,
      ...theme.eventTitle,
    },
    eventTimes: {
      marginTop: 3,
      fontSize: 10,
      fontWeight: 'bold',
      color: 'white',
      flexWrap: 'wrap',
      ...theme.eventTimes,
    },
    line: {
      height: 1,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'rgb(216,216,216)',
      ...theme.line,
    },
    lineNow: {
      height: 1,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'red',
      ...theme.lineNow,
    },
    timeLabel: {
      position: 'absolute',
      left: 15,
      color: 'rgb(170,170,170)',
      fontSize: 12,
      fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
      fontWeight: 'bold',
      ...theme.timeLabel,
    },
  };
  return StyleSheet.create(style);
}
