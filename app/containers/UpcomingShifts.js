// @flow

import React, {Component} from 'react';
import {Agenda} from 'react-native-calendars';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';

import {getAllShifts} from '../redux/actions/shifts';
import {renderItem, renderEmptyDate, rowHasChanged} from '../components/AgendaItems';

type Props = {
  getAllShifts: () => void,
  shifts: any,
};

class UpcomingShifts extends Component<Props> {
  componentWillMount() {
    this.props.getAllShifts();
  }

  groupShiftsByDate = (shifts: any) => {
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

  formatShifts = () => {
    const shifts = this.groupShiftsByDate(this.props.shifts.team_shifts);
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

  render() {
    console.log(this.props.shifts);

    const today = moment(new Date()).format('YYYY-MM-DD');
    const weekFromNow = moment(new Date())
      .add(1, 'weeks')
      .format('YYYY-MM-DD');

    return (
      <Agenda
        items={this.formatShifts()}
        refreshing={this.props.shifts.isLoading}
        rowHasChanged={rowHasChanged}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        selected={today}
        maxDate={weekFromNow}
        futureScrollRange={3}
      />
    );
  }
}

const mapStateToProps = state => ({
  shifts: state.shifts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllShifts,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpcomingShifts);
