// @flow

import React, {Component} from 'react';
import {Agenda} from 'react-native-calendars';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';

import {getAllShifts} from '../redux/actions/shifts';
import {renderItem, renderEmptyDate, rowHasChanged} from '../components/AgendaItems';

import UserSettingsModal from './UserSettingsModal';

import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Text,
  Button,
  Card,
  CardItem,
} from 'native-base';
import {View, Alert} from 'react-native';

import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

type Props = {
  getAllShifts: () => void,
};

class UserSettings extends Component<Props> {
  componentWillMount() {
    this.props.getAllShifts();
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{margin: 25}}>
          <Card>
            <CardItem>
              <Text>Name: Rikki Kendall</Text>
            </CardItem>
            <CardItem>
              <Text>Email: yrk3@duke.edu</Text>
            </CardItem>
            <CardItem>
              <Text>Phone: 5593266408</Text>
            </CardItem>
          </Card>
          <UserSettingsModal />
        </Content>
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
)(UserSettings);
