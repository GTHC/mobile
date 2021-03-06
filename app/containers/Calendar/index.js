/* eslint-disable camelcase */
import React, { Component } from 'react';
import { ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventCalendar from '../../components/EventCalendar';
import { getAllShifts } from '../../redux/actions/shifts';
import { width, getTheme, leftArrow, rightArrow } from './styles';
import { formatTeamShifts, today } from './utils';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: today,
    };

    this.props.getAllShifts();
  }

  onDateChanged = date => {
    this.refs.calendar.goToDate(date);
  };

  onPageScroll = date => {
    this.setState({ selectedDate: date });
  };

  eventTapped = shift => {
    this.props.navigation.navigate('ShiftView', { shift });
  };

  render() {
    const { user } = this.props;
    const events = formatTeamShifts(this.props.shifts.team_shifts, user.data.id);
    const { selectedDate } = this.state;

    return (
      <CalendarProvider
        date={selectedDate}
        onDateChanged={this.onDateChanged}
        showTodayButton
        theme={{ todayButtonTextColor: '#0059ff' }}
        disabledOpacity={0.6}
      >
        <ExpandableCalendar
          firstDay={1}
          theme={getTheme()}
          leftArrowImageSource={leftArrow}
          rightArrowImageSource={rightArrow}
        />

        <View style={{ flex: 1 }}>
          <EventCalendar
            ref="calendar"
            getAllShifts={this.props.getAllShifts}
            shifts={this.props.shifts}
            onPageScroll={date => this.onPageScroll(date)}
            selectedDate={this.state.selectedDate}
            eventTapped={this.eventTapped}
            events={events}
            width={width}
            initDate={today}
            upperCaseHeader
            uppercase
            scrollToFirst
          />
        </View>
      </CalendarProvider>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
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
)(Calendar);
