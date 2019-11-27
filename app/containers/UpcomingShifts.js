// @flow

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import AppFooter from './AppFooter';

import { getAllShifts } from '../redux/actions/shifts';
import { renderItem, renderEmptyDate, rowHasChanged } from '../components/AgendaItems';
import { Container } from 'native-base';

import { Link } from 'react-router-native';

type Props = {
  getAllShifts: () => void,
};

class UpcomingShifts extends Component<Props> {
  componentWillMount() {
    this.props.getAllShifts();
  }

  render() {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const weekFromNow = moment(new Date())
      .add(1, 'weeks')
      .format('YYYY-MM-DD');

    return (
      <Container>
      <Agenda
        items={{
          '2019-11-13': [{ text: 'Anesu, Aman', time: '3 - 5PM' }],
          '2019-11-13': [{ text: 'Anesu, Rikki', time: '11AM - 2PM' }],
          '2019-11-13': [
            { text: 'Anesu, Vinit', time: '12 - 5PM' },
            { text: 'Anesu, Gouttham', time: '1AM - 8AM' },
          ],
        }}
        rowHasChanged={rowHasChanged}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        selected={today}
        minDate={today}
        maxDate={weekFromNow}
        pastScrollRange={3}
        futureScrollRange={3}
      />
      <AppFooter />
      </Container>
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
