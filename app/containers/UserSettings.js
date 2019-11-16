// @flow

import React, { Component } from 'react';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import { getAllShifts } from '../redux/actions/shifts';
import { renderItem, renderEmptyDate, rowHasChanged } from '../components/AgendaItems';

import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';

import { Link } from 'react-router-native';

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
      <Content contentContainerStyle ={{
        justifyContent: 'center', alignItems: 'center',
        paddingTop: 40, paddingHorizontal: 5}}>
        <Card>
        <CardItem>
        <Text>
        Name: Rikki Kendall
        </Text>
        </CardItem>
        <CardItem>
        <Text>
        Email: yrk3@duke.edu
        </Text>
        </CardItem>
        <CardItem>
        <Text>
        Phone: 5593266408
        </Text>
        </CardItem>
        </Card>
        <Button block style= {{marginTop: 40}}>
        <Link to={'/edituser'}>
        <Text> Edit User Information </Text>
        </Link>
        </Button>
        <Button block style= {{marginTop: 40}}>
        <Text> Edit Password </Text>
        </Button>
        <Button block style= {{marginTop: 40}}>
        <Text> Edit Avatar </Text>
        </Button>
        <Button block style= {{marginTop: 40}}>
        <Text> Edit Availability </Text>
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
)(UserSettings);
