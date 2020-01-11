// @flow

import moment from 'moment';

const formatTeamShifts = (shifts, userId) => {
  const items = [];

  shifts.forEach(shift => {
    const start = moment(shift.start);
    const end = moment(shift.end);

    let daysOverlap = false;
    if (!start.isSame(end, 'day')) {
      daysOverlap = true;
    }

    const usersOnShift = shift.users.map(user => user.id);
    const isUserOnShift = usersOnShift.find(id => id === userId);
    const shiftData = {
      data: shift,
      title: shift.title,
      backgroundColor: isUserOnShift ? '#0577B1' : '#c3c5cc',
      textColor: isUserOnShift ? 'white' : 'black',
    };

    const shift1End = !daysOverlap
      ? end.format('YYYY-MM-DD HH:mm:ss') : `${start.format('YYYY-MM-DD')} 24:00:00`;
    const formattedShift1 = {
      ...shiftData,
      start: start.format('YYYY-MM-DD HH:mm:ss'),
      end: shift1End,
    };

    items.push(formattedShift1);

    if (daysOverlap) {
      const formattedShift2 = {
        ...shiftData,
        start: `${end.format('YYYY-MM-DD')} 00:00:00`,
        end: end.format('YYYY-MM-DD HH:mm:ss'),
      };

      items.push(formattedShift2);
    }
  });

  return items;
};

const today = moment(new Date()).format('YYYY-MM-DD');

export { formatTeamShifts, today };
