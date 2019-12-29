// @flow
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
        data: shift,
        text: shift.title,
        time: `${start.format('hh:mm A')} - ${end.format('hh:mm A')}`,
      };
      shiftsForDay.push(description);
    });

    items[date] = shiftsForDay;
  });

  return items;
};

const onItemClicked = (shift) => {
  // TODO(rikki): route to correct page.
};

const renderItem = (item) => (
  <TouchableOpacity onPress={() => onItemClicked(item.data)}>
    <View style={[styles.item, { height: item.height }]}>
      <Text style={{ color: 'white' }}>{item.text}</Text>
      <Text style={{ color: 'white' }}>{item.time}</Text>
    </View>
  </TouchableOpacity>
);

const renderEmptyDate = () => <View style={styles.emptyDate} />;

const rowHasChanged = (r1, r2) => r1.name !== r2.name;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#00adf5',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    color: 'white',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});


export { today, groupShiftsByDate, formatShifts, renderItem, renderEmptyDate, rowHasChanged };
