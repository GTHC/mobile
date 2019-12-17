import React, { Component } from 'react';
import { ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventCalendar from '../../components/EventCalendar';
import { getAllShifts } from '../../redux/actions/shifts';
import { width, getTheme, leftArrow, rightArrow } from './styles';
import {
  getFutureDates,
  getPastDate,
  onMonthChange,
  eventTapped,
  formatTeamShifts,
  today } from './utils';


const today2 = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(9);
const dates = [fastDate, today2].concat(futureDates);

const ITEMS = [
  { title: dates[0], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] },
  { title: dates[1], data: [{ hour: '4pm', duration: '1h', title: 'Pilates ABC' }, { hour: '5pm', duration: '1h', title: 'Vinyasa Yoga' }] },
  { title: dates[2], data: [{ hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' }, { hour: '2pm', duration: '1h', title: 'Deep Streches' }, { hour: '3pm', duration: '1h', title: 'Private Yoga' }] },
  { title: dates[3], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] },
  { title: dates[4], data: [{}] },
  { title: dates[5], data: [{ hour: '9pm', duration: '1h', title: 'Pilates Reformer' }, { hour: '10pm', duration: '1h', title: 'Ashtanga' }, { hour: '11pm', duration: '1h', title: 'TRX' }, { hour: '12pm', duration: '1h', title: 'Running Group' }] },
  { title: dates[6], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] },
  { title: dates[7], data: [{}] },
  { title: dates[8], data: [{ hour: '9pm', duration: '1h', title: 'Pilates Reformer' }, { hour: '10pm', duration: '1h', title: 'Ashtanga' }, { hour: '11pm', duration: '1h', title: 'TRX' }, { hour: '12pm', duration: '1h', title: 'Running Group' }] },
  { title: dates[9], data: [{ hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' }, { hour: '2pm', duration: '1h', title: 'Deep Streches' }, { hour: '3pm', duration: '1h', title: 'Private Yoga' }] },
  { title: dates[10], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] },
];

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: today,
    };
  }

  componentWillMount() {
    this.props.getAllShifts();
  }

  onDateChanged = (date) => {
    this.refs.calendar.goToDate(date);
  }

  render() {
    const events = formatTeamShifts(this.props.shifts.team_shifts);

    return (
      <CalendarProvider
        date={ITEMS[0].title}
        onDateChanged={this.onDateChanged}
        onMonthChange={onMonthChange}
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
            selectedDate={this.state.selectedDate}
            eventTapped={eventTapped}
            events={events}
            width={width}
            initDate={today}
            upperCaseHeader
            uppercase
            scrollToFirst={false}
          />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
