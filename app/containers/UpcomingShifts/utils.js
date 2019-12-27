// @flow
import React from 'react';
import { View, StyleSheet, Modal, DatePickerIOS, TouchableHighlight, TouchableOpacity } from 'react-native';
import moment from 'moment';
import CalendarModal from '../../components/CalendarModal';
import { Calendar } from 'react-native-calendars';
import {
  Toast,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Title,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Card,
} from 'native-base';

const today = moment(new Date()).format('YYYY-MM-DD');

const modalVisible = false;

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
        text: shift.title,
        time: `${start.format('hh:mm A')} - ${end.format('hh:mm A')}`,
        notes: shift.notes,
      };
      shiftsForDay.push(description);
    });

    items[date] = shiftsForDay;
  });

  return items;
};

const renderItem = (item: any, modalVisible: false) => (
  <View  style={[styles.item, { height: item.height }]} >
    <Text onPress={() => {modalVisible: true}} style={{ color: 'white' }}>{item.text}</Text>
    <Text style={{ color: 'white' }}>{item.time}</Text>
    <Modal
      animationType={'none'}
      transparent={true}
      // visible={{modalVisible: false}}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <View style={styles.modal}>
        <Container>
          <Header>
          <Body style={{marginTop: 10, flexDirection: 'row'}}>
              <Title>{ item.text}</Title>
          </Body>
          </Header>
          <Content style={styles.content}>
              <Body style={{marginTop: 10, flexDirection: 'row-reverse'}}>
                <Title>Time</Title>
              </Body>
              <Body style={{marginTop: 10, flexDirection: 'row-reverse'}}>
                <Text>{ item.time }</Text>
              </Body>
              <Item>
                <Text>{item.description}</Text>
              </Item>
            <View style={styles.content}>
              <Button
                block
                style={{marginTop: 20, margin: 100, backgroundColor: '#00adf5'}}
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible);
                }}>
                <Text>Close</Text>
              </Button>
            </View>
          </Content>
        </Container>
      </View>
    </Modal>
  </View>
);

const renderEmptyDate = () => <View style={styles.emptyDate} />;

const rowHasChanged = (r1: any, r2: any) => r1.name !== r2.name;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  modal: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    borderColor: '#fff',
    marginTop: 70,
    marginLeft: 20,
  },
});


export { today, groupShiftsByDate, formatShifts, renderItem, renderEmptyDate, rowHasChanged, };