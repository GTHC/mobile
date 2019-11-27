import React, { Component } from 'react';
import { Button, Icon, Title, Right, Left, Container, Header, Content, Tab, Tabs, Body } from 'native-base';
import AppFooter from './AppFooter';

import { View, Dimensions, Text } from 'react-native';

import { Link } from 'react-router-native';

export default class Notifications extends Component {
  render() {
    return (
      <Container>
      <Header>
          <Button>
            <Link to={'/'}>
              <Icon name='arrow-back' />
            </Link>
          </Button>
          <Left />
          <Body style={{flexDirection: 'row'}}>
          <Title>Notifications</Title>
          </Body>
        </Header>
        <Content>
        </Content>
        <AppFooter />
      </Container>
    );
  }
}
