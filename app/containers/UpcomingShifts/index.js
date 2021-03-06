/* eslint-disable camelcase */
// @flow

import React, { Component } from 'react';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { getTheme } from './styles';
import { today, formatShifts, renderEmptyDate, rowHasChanged } from './utils';
import { getAllShifts } from '../../redux/actions/shifts';

class UpcomingShifts extends Component {
  constructor(props) {
    super(props);
    this.props.getAllShifts();
  }

  renderItem = (item) => (
    <TouchableOpacity onPress={() => this.onItemClicked(item.data)}>
      <View style={[styles.item, { height: item.height }]}>
        <Text style={{ color: 'white' }}>{item.time}</Text>
        <Text style={{ color: 'white' }}>{item.text}</Text>
        <Text style={{ color: 'white', paddingTop: 8 }}>{item.when}</Text>
      </View>
    </TouchableOpacity>
  );

  onItemClicked = (shift) => {
    this.props.navigation.navigate('ShiftView', { shift });
  };

  onRefresh = () => {
    this.props.getAllShifts();
  }

  render() {
    return (
      <Agenda
        items={formatShifts(this.props.shifts.user_shifts)}
        refreshing={this.props.shifts.isLoading}
        rowHasChanged={rowHasChanged}
        renderItem={this.renderItem}
        renderEmptyDate={renderEmptyDate}
        selected={today}
        theme={getTheme()}
        futureScrollRange={3}
        onRefresh={this.onRefresh}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#00adf5',
    flex: 1,
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    marginTop: 8,
    color: 'white',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

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
