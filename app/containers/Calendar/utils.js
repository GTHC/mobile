// @flow

import moment from 'moment';

const getFutureDates = (days) => {
  const array = [];
  for (let index = 1; index <= days; index++) {
    const date = new Date(Date.now() + (864e5 * index));
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
};

const getPastDate = (days) => new Date(Date.now() - (864e5 * days)).toISOString().split('T')[0];

const onDateChanged = (/* date, updateSource */) => {
  // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
  // fetch and set data for date + week ahead
};

const onMonthChange = (/* month, updateSource */) => {
  // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
};

const eventTapped = (event) => {
};

const formatTeamShifts = (shifts) => {
  const items = [];

  shifts.forEach(shift => {
    const start = moment(shift.start);
    const end = moment(shift.end);

    const formattedShift = {
      start: start.format('YYYY-MM-DD HH:mm:ss'),
      end: end.format('YYYY-MM-DD HH:mm:ss'),
      title: shift.title,
    };

    items.push(formattedShift);
  });

  return items;
};

const today = moment(new Date()).format('YYYY-MM-DD');

export {
  getFutureDates,
  getPastDate,
  onDateChanged,
  onMonthChange,
  eventTapped,
  formatTeamShifts,
  today,
};
