// @flow

import moment from 'moment';

const formatTeamShifts = (shifts, userId) => {
  const items = [];

  shifts.forEach(shift => {
    const start = moment(shift.start);
    const end = moment(shift.end);

    const usersOnShift = shift.users.map(user => user.id);
    const isUserOnShift = usersOnShift.find(id => id === userId);
    const formattedShift = {
      data: shift,
      start: start.format('YYYY-MM-DD HH:mm:ss'),
      end: end.format('YYYY-MM-DD HH:mm:ss'),
      title: shift.title,
      backgroundColor: isUserOnShift ? '#00adf5' : '#c3c5cc',
      textColor: isUserOnShift ? 'white' : 'black',
    };

    items.push(formattedShift);
  });

  return items;
};

const today = moment(new Date()).format('YYYY-MM-DD');

export { formatTeamShifts, today };
