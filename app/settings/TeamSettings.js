// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import { getAllShifts } from '../redux/actions/shifts';
import { renderItem, renderEmptyDate, rowHasChanged } from '../components/AgendaItems';

import {
  Container,
  Icon,
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

import { Link } from 'react-router-native';

type Props = {
  getAllShifts: () => void,
};

class TeamSettings extends Component<Props> {
  componentWillMount() {
    this.props.getAllShifts();
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{  margin: 25 }}>
          <Card>
            <CardItem>
              <Text>Team Name: Team GTHC</Text>
            </CardItem>
            <CardItem>
              <Text>Tent Type: Black</Text>
            </CardItem>
            <CardItem>
              <Text>Passcode: ADC9L</Text>
            </CardItem>
          </Card>
          <Button block style= {{marginTop: 40, margin: 50}}>
            <Link to={'/editteamsettings'}>
              <Text> Edit Team Settings </Text>
            </Link>
          </Button>
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
)(TeamSettings);
