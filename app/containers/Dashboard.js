import React, {Component} from 'react';
import {
  Button,
  Icon,
  Title,
  Right,
  Left,
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Body,
} from 'native-base';

import {View, Dimensions, Text} from 'react-native';

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Button>
            <Icon name="arrow-back" />
          </Button>
          <Left />
          <Body style={{flexDirection: 'row'}}>
            <Title>Dashboard</Title>
          </Body>
        </Header>
        <Content />
      </Container>
    );
  }
}
