// @flow

import { Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const leftArrow = require('../../../assets/images/previous.png');
const rightArrow = require('../../../assets/images/next.png');

const getTheme = () => {
  const themeColor = '#00adf5';
  const disabledColor = '#a6acb1';
  const black = '#20303c';
  const white = '#ffffff';

  return {
    // arrows
    arrowColor: black,
    arrowStyle: { padding: 0 },
    // month
    monthTextColor: black,
    textMonthFontSize: 16,
    textMonthFontFamily: 'HelveticaNeue',
    textMonthFontWeight: 'bold',
    // day names
    textSectionTitleColor: black,
    textDayHeaderFontSize: 12,
    textDayHeaderFontFamily: 'HelveticaNeue',
    textDayHeaderFontWeight: 'normal',
    // today
    todayBackgroundColor: '#ff453a',
    todayTextColor: white,
    // dates
    dayTextColor: black,
    textDayFontSize: 16,
    textDayFontFamily: 'HelveticaNeue',
    textDayFontWeight: '500',
    textDayStyle: { marginTop: Platform.OS === 'android' ? 2 : 4 },
    // selected date
    selectedDayBackgroundColor: black,
    selectedDayTextColor: white,
    // disabled date
    textDisabledColor: disabledColor,
    // dot (marked date)
    dotColor: themeColor,
    selectedDotColor: white,
    disabledDotColor: disabledColor,
    dotStyle: { marginTop: -2 },
  };
};

export { getTheme, width, leftArrow, rightArrow };
