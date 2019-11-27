// @flow

import React, { Component } from 'react';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import { getAllShifts } from '../redux/actions/shifts';
import { renderItem, renderEmptyDate, rowHasChanged } from '../components/AgendaItems';
import AppFooter from '../containers/AppFooter';

import { Toast, Button, Icon, Body, Left, Right, Title, Text, Container, Header, Content, Form, Item, Input, Label } from 'native-base';

import { Link } from 'react-router-native';

type Props = {
  getAllShifts: () => void,
};

const styles = StyleSheet.create({

});


class EditTeamSettings extends Component<Props> {
  componentWillMount() {
    this.props.getAllShifts();
  }

  render() {

    return (
          <Container>
          <Header>
          <Button iconleft primary>
          <Link to={'/settings'}>
          <Icon name='arrow-back' />
          </Link>
          </Button>
          <Left />
          <Body style={{flexDirection: 'row'}}>
          <Title>Team Settings</Title>
          </Body>
          </Header>
            <Content>
              <Form style={{margin: 25}}>
                <Item floatingLabel>
                  <Label>Team Name</Label>
                  <Input />
                </Item>
                <Item floatingLabel last>
                  <Label>Tent Type</Label>
                  <Input />
                </Item>
              </Form>
              <View style={styles.content}>
              <Button primary block style= {{marginTop: 40, margin: 75}}>
              <Text> Change Team Settings </Text>
              </Button>
              </View>
            </Content>
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
)(EditTeamSettings);
