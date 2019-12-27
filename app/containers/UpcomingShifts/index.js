/* eslint-disable camelcase */
// @flow

import React, { Component } from 'react';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTheme } from './styles';
import { today, formatShifts, renderItem, renderEmptyDate, rowHasChanged, calendarModal } from './utils';
import { getAllShifts } from '../../redux/actions/shifts';


type Props = {
  getAllShifts: () => void,
  shifts: any,
};

class UpcomingShifts extends Component<Props> {
  UNSAFE_componentWillMount() {
    this.props.getAllShifts();
  }

  render() {
    return (
      <Agenda
        items={formatShifts(this.props.shifts.team_shifts)}
        refreshing={this.props.shifts.isLoading}
        rowHasChanged={rowHasChanged}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        calendarModal={calendarModal}
        selected={today}
        theme={getTheme()}
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
