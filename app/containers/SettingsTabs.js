import React, { Component } from 'react';
import { Button, Icon, Title, Right, Left, Container, Header, Content, Tab, Tabs } from 'native-base';
import TeamSettings from './TeamSettings';
import UserSettings from './UserSettings';
import EditUserSettings from './EditUserSettings';

import { Link } from 'react-router-native';

export default class SettingsTabs extends Component {
  render() {
    return (
      <Container>
      <Header>
      <Button iconleft primary>
      <Link to={'/shifts'}>
      <Icon name='arrow-back' />
      </Link>
      </Button>
      <Left />
      <Button iconLeft primary>
      <Title>Settings</Title>
      <Icon name='cog' />
      </Button>
      <Right />
      </Header>
        <Tabs>
          <Tab heading="User">
            <UserSettings />
          </Tab>
          <Tab heading="Team">
            <TeamSettings />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
