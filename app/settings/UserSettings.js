// @flow

import React, { Component } from 'react';


import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
} from 'native-base';

import UserSettingsModal from './UserSettingsModal';

export default class UserSettings extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ margin: 25 }}>
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
