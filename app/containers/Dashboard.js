import React, { Component } from 'react';
import { Button, Icon, Title, Right, Left, Container, Header, Content, Tab, Tabs, Body } from 'native-base';
import TeamSettings from './TeamSettings';
import UserSettings from './UserSettings';
import EditUserSettings from './EditUserSettings';
import Footer from './Footer';

import { View, Dimensions, Text } from 'react-native';

import { Link } from 'react-router-native';

export default class Dashboard extends Component {
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
        <Body style={{flexDirection: 'row'}}>
        <Icon name='cog' style={{color: 'white', padding: 10}} />
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
        <Footer />
      </Container>
    );
  }
}
