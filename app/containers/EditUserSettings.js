// @flow

import React, { Component } from 'react';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import { getAllShifts } from '../redux/actions/shifts';
import { renderItem, renderEmptyDate, rowHasChanged } from '../components/AgendaItems';
import Footer from './Footer';

import { Toast, Button, Icon, Body, Left, Right, Title, Text, Container, Header, Content, Form, Item, Input, Label } from 'native-base';

import { Link } from 'react-router-native';

type Props = {
  getAllShifts: () => void,
};

class EditUserSettings extends Component<Props> {
  componentWillMount() {
    this.props.getAllShifts();
  }

  render() {

    return (
          <Container>
          <Header>
          <Button iconleft primary>
          <Link to={'/'}>
          <Icon name='arrow-back' />
          </Link>
          </Button>
          <Left />
          <Button iconLeft primary>
          <Title>User Settings</Title>
          <Icon name='cog' />
          </Button>
          <Right />
          </Header>
            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Name</Label>
                  <Input />
                </Item>
                <Item floatingLabel last>
                  <Label>Phone Number</Label>
                  <Input />
                </Item>
              </Form>
              <Button primary block style= {{marginTop: 40}}>
              <Text> Change User Settings </Text>
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
)(EditUserSettings);
