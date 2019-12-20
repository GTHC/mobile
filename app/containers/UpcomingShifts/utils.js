// @flow
import moment from 'moment';

const today = moment(new Date()).format('YYYY-MM-DD');

const groupShiftsByDate = (shifts: any) => {
  const groups = {};
  shifts.forEach(shift => {
    const date = moment(shift.start).format('YYYY-MM-DD');
    if (groups[date] === undefined) {
      groups[date] = [shift];
    } else {
      groups[date].push(shift);
    }
  });

  return groups;
};

const formatShifts = teamShifts => {
  const shifts = groupShiftsByDate(teamShifts);
  const items = {};

  Object.keys(shifts).forEach(date => {
    const shiftsForDay = [];

    shifts[date].forEach(shift => {
      const start = moment(shift.start);
      const end = moment(shift.end);

      const description = {
        text: shift.title,
        time: `${start.format('hh:mm A')} - ${end.format('hh:mm A')}`,
      };
      shiftsForDay.push(description);
    });

    items[date] = shiftsForDay;
  });

  return items;
};

export {today, groupShiftsByDate, formatShifts};
