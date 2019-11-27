import React, { Component } from 'react';
import { Button, Icon, Title, Right, Left, Container, Header, Content, Tab, Tabs, Body } from 'native-base';
import TeamSettings from '../settings/TeamSettings';
import UserSettings from '../settings/UserSettings';
import AppFooter from './AppFooter';

import { View, Dimensions, Text } from 'react-native';

import { Link } from 'react-router-native';

export default class SettingsTabs extends Component {
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
        <Body style={{flexDirection: 'row'}}>
        <Title>Settings</Title>
        </Body>
      </Header>
      <Content>
        <Tabs>
          <Tab heading="User">
            <UserSettings />
          </Tab>
          <Tab heading="Team">
            <TeamSettings />
          </Tab>
        </Tabs>
        </Content>
        <AppFooter />
      </Container>
    );
  }
}
