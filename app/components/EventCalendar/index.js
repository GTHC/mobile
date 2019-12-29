// @flow

/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable global-require */
/* eslint-disable radix */
/* eslint-disable react/no-string-refs */

import React, { Component } from 'react';
import { VirtualizedList, View, Dimensions } from 'react-native';
import _ from 'lodash';
import moment from 'moment';
import styleConstructor from './style';
import DayView from '../DayView';

export default class EventCalendar extends Component {
  static defaultProps = {
    size: 30,
    initDate: new Date(),
    formatHeader: 'DD MMMM YYYY',
  };

  constructor(props) {
    super(props);

    const start = props.start ? props.start : 0;
    const end = props.end ? props.end : 24;

    this.styles = styleConstructor(props.styles, (end - start) * 100);
    this.state = {
      index: this.props.size,
    };
  }

  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }

  componentWillUnmount() {
    if (this.props.onRef) {
      this.props.onRef(undefined);
    }
  }

  getItemLayout = (data, index) => {
    const { width } = this.props;
    return { length: width, offset: width * index, index };
  };

  getItem = (events, index) => {
    const date = moment(this.props.initDate).add(index - this.props.size, 'days');
    return _.filter(events, event => {
      const eventStartTime = moment(event.start);
      return (
        eventStartTime >= date.clone().startOf('day') && eventStartTime <= date.clone().endOf('day')
      );
    });
  };

  renderItem = ({ index, item }) => {
    const {
      width,
      format24h,
      initDate,
      scrollToFirst = true,
      start = 0,
      end = 24,
      formatHeader,
      headerStyle,
      renderEvent,
      eventTapped,
    } = this.props;

    const date = moment(initDate).add(index - this.props.size, 'days');

    return (
      <DayView
        date={date}
        index={index}
        format24h={format24h}
        formatHeader={formatHeader}
        headerStyle={headerStyle}
        renderEvent={renderEvent}
        eventTapped={eventTapped}
        events={item}
        width={width}
        styles={this.styles}
        scrollToFirst={scrollToFirst}
        start={start}
        end={end}
      />
    );
  };

  goToPage = index => {
    if (index <= 0 || index >= this.props.size * 2) {
      return;
    }

    this.refs.calendar.scrollToIndex({ index, animated: false });
    this.setState({ index });
  };

  goToDate = date => {
    const earliestDate = moment(this.props.initDate).subtract(this.props.size, 'days');
    const index = moment(date).diff(earliestDate, 'days');
    this.goToPage(index);
  };

  previous = () => {
    this.goToPage(this.state.index - 1);
    if (this.props.dateChanged) {
      this.props.dateChanged(
        moment(this.props.initDate)
          .add(this.state.index - 1 - this.props.size, 'days')
          .format('YYYY-MM-DD'),
      );
    }
  };

  next = () => {
    this.goToPage(this.state.index + 1);
    if (this.props.dateChanged) {
      this.props.dateChanged(
        moment(this.props.initDate)
          .add(this.state.index + 1 - this.props.size, 'days')
          .format('YYYY-MM-DD'),
      );
    }
  };

  onScrollEndDrag = event => {
    const pageIndex = Math.round(
      parseFloat(event.nativeEvent.contentOffset.x / Dimensions.get('window').width),
    );

    const diff = this.state.index - pageIndex;

    if (diff === 0) {
      return;
    }

    const scrollDate = moment(this.props.initDate)
      .subtract(diff, 'days')
      .format('YYYY-MM-DD');

    const { onPageScroll } = this.props;
    onPageScroll(scrollDate);
  };

  render() {
    const { width, virtualizedListProps, events } = this.props;

    return (
      <View style={[this.styles.container, { width }]}>
        <VirtualizedList
          ref="calendar"
          windowSize={2}
          initialNumToRender={1}
          initialScrollIndex={this.props.size}
          data={events}
          getItemCount={() => this.props.size * 2}
          getItem={this.getItem}
          keyExtractor={(item, index) => index.toString()}
          getItemLayout={this.getItemLayout}
          horizontal
          pagingEnabled
          renderItem={this.renderItem}
          style={{ width }}
          onScrollEndDrag={this.onScrollEndDrag}
          scrollEnabled={false}
          {...virtualizedListProps}
        />
      </View>
    );
  }
}
