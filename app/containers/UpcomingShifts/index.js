// @flow

import React, { Component } from 'react';
import { AgendaList, ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { getTheme, leftArrow, rightArrow } from './styles';
import { today } from './utils';
import { getAllShifts } from '../../redux/actions/shifts';
import { renderItem, renderEmptyDate, rowHasChanged } from '../../components/AgendaItems';

type Props = {
  getAllShifts: () => void,
  shifts: any,
};

class UpcomingShifts extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: today,
    };
  }

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
    const shifts = this.groupShiftsByDate(this.props.shifts.user_shifts);
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
    const { selectedDate } = this.state;

    return (
      <CalendarProvider
        date={selectedDate}
        onDateChanged={this.onDateChanged}
        theme={{ todayButtonTextColor: '#0059ff' }}
        disabledOpacity={0.6}
      >
        <ExpandableCalendar
          firstDay={1}
          theme={getTheme()}
          leftArrowImageSource={leftArrow}
          rightArrowImageSource={rightArrow}
        />

        <AgendaList
          sections={this.formatShifts()}
          refreshing={this.props.shifts.isLoading}
          renderItem={renderItem}
        />
      </CalendarProvider>
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
