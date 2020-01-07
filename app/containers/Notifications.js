// @flow

import React, { Component } from 'react';
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
import UserAnnouncements from '../components/UserAnnouncements';
import UserNotifications from '../components/UserNotifications';

export default class Notifications extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Tabs>
            <Tab heading="Line Monitor">
              <UserAnnouncements />
            </Tab>
            <Tab heading="User">
              <UserNotifications />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}




