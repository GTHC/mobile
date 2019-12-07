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
import TeamSettings from '../settings/TeamSettings';
import UserSettings from '../settings/UserSettings';

import {View, Dimensions, Text} from 'react-native';

export default class SettingsTabs extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Tabs>
            <Tab style={{backgroundColor: '#00adf5'}} heading="User">
              <UserSettings />
            </Tab>
            <Tab style={{backgroundColor: '#00adf5'}} heading="Team">
              <TeamSettings />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
