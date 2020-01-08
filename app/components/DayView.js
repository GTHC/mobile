/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/sort-comp */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { PureComponent } from 'react';
import UserAvatar from 'react-native-user-avatar';
import moment from 'moment';
import _ from 'lodash';
import populateEvents from '../utils/Packer';

const LEFT_MARGIN = 59;
const TEXT_LINE_HEIGHT = 17;

function range(from, to) {
  return Array.from(Array(to), (_, i) => from + i);
}

export default class DayView extends PureComponent {
  constructor(props) {
    super(props);
    const { start, end, date } = props;
    this.calendarHeight = (end - start) * 100;
    const width = props.width - LEFT_MARGIN;
    const packedEvents = populateEvents(props.events, width, props.start);
    let initPosition = _.min(_.map(packedEvents, 'top')) - this.calendarHeight / (end - start);

    const today = moment(new Date());
    const isShowingToday = today.isSame(date, 'day');
    if (isShowingToday) {
      initPosition = this.calendarHeight * (today.hour() / 24);
    } else {
      initPosition = initPosition < 0 ? 0 : initPosition;
    }

    this.state = {
      _scrollY: initPosition,
      isShowingToday,
      packedEvents,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const width = nextProps.width - LEFT_MARGIN;
    this.setState({
      packedEvents: populateEvents(nextProps.events, width, nextProps.start),
    });
  }

  componentDidMount() {
    this.props.scrollToFirst && this.scrollToFirst();
  }

  scrollToFirst() {
    setTimeout(() => {
      if (this.state && this.state._scrollY && this._scrollView) {
        this._scrollView.scrollTo({
          x: 0,
          y: this.state._scrollY,
          animated: true,
        });
      }
    }, 1);
  }

  _renderRedLine() {
    const offset = 100;
    const { format24h } = this.props;
    const { width, styles } = this.props;
    const timeNowHour = moment().hour();
    const timeNowMin = moment().minutes();
    return (
      <View
        key="timeNow"
        style={[
          styles.lineNow,
          {
            top: offset * (timeNowHour - this.props.start) + (offset * timeNowMin) / 60,
            width: width - 20,
          },
        ]}
      />
    );
  }

  _renderLines() {
    const { format24h, start, end } = this.props;
    const offset = this.calendarHeight / (end - start);

    return range(start, end + 1).map((i, index) => {
      let timeText;
      if (i === start) {
        timeText = '';
      } else if (i < 12) {
        timeText = !format24h ? `${i} AM` : i;
      } else if (i === 12) {
        timeText = !format24h ? `${i} PM` : i;
      } else if (i === 24) {
        timeText = !format24h ? '12 AM' : 0;
      } else {
        timeText = !format24h ? `${i - 12} PM` : i;
      }
      const { width, styles } = this.props;
      return [
        <Text key={`timeLabel${i}`} style={[styles.timeLabel, { top: offset * index - 6 }]}>
          {timeText}
        </Text>,
        i === start ? null : (
          <View key={`line${i}`} style={[styles.line, { top: offset * index, width: width - 20 }]} />
        ),
        <View
          key={`lineHalf${i}`}
          style={[styles.line, { top: offset * (index + 0.5), width: width - 20 }]}
        />,
      ];
    });
  }

  _renderTimeLabels() {
    const { styles, start, end } = this.props;
    const offset = this.calendarHeight / (end - start);
    return range(start, end).map((item, i) => (
      <View key={`line${i}`} style={[styles.line, { top: offset * i }]} />
    ));
  }

  _onEventTapped(event) {
    this.props.eventTapped(event.data);
  }

  renderShiftAttendees = ({ data }) => {
    const { start, end } = data;

    const endTime = moment(end);
    const startTime = moment(start);
    const duration = moment.duration(endTime.diff(moment(startTime)));
    const diff = duration.asHours();

    const diffLessThanOne = diff > 0.5;
    const userAvatars = data.users.map(user => (
      diffLessThanOne && (
      <View style={{ paddingRight: 4 }}>
        <UserAvatar size="32" name={user.name} />
      </View>
      )
    ));

    return (
      <View style={styles.attendees}>
        {userAvatars}
      </View>
    );
  }

  _renderEvents() {
    const { styles } = this.props;
    const { packedEvents } = this.state;
    const events = packedEvents.map((event, i) => {
      const style = {
        left: event.left,
        height: event.height,
        width: event.width,
        top: event.top,
        padding: 4,
      };

      const eventColor = {
        backgroundColor: event.color,
      };

      // Fixing the number of lines for the event title makes this calculation easier.
      // However it would make sense to overflow the title to a new line if needed
      const numberOfLines = Math.floor(event.height / TEXT_LINE_HEIGHT);
      const formatTime = this.props.format24h ? 'HH:mm' : 'hh:mm A';
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this._onEventTapped(this.props.events[event.index])}
          key={i}
          style={[styles.event, style, event.color && eventColor]}
        >
          {this.props.renderEvent ? (
            this.props.renderEvent(event)
          ) : (
            <View>
              <Text numberOfLines={1} style={styles.eventTitle}>
                {event.title || 'Event'}
              </Text>
              <Text style={styles.eventTimes} numberOfLines={1}>
                {moment(event.start).format(formatTime)}
                {' '}
-
                {' '}
                {moment(event.end).format(formatTime)}
              </Text>
              {this.renderShiftAttendees(this.props.events[event.index])}
            </View>
          )}
        </TouchableOpacity>
      );
    });

    return (
      <View>
        <View style={{ marginLeft: LEFT_MARGIN }}>{events}</View>
      </View>
    );
  }

  render() {
    const { styles } = this.props;
    return (
      <ScrollView
        ref={ref => (this._scrollView = ref)}
        contentContainerStyle={[styles.contentStyle, { width: this.props.width }]}
      >
        {this._renderLines()}
        {this._renderEvents()}
        {this.state.isShowingToday && this._renderRedLine()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  attendees: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
  },
});
