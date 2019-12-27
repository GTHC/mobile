// @flow

import moment from 'moment';

const eventTapped = event => {};

const formatTeamShifts = shifts => {
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

export {eventTapped, formatTeamShifts, today};