import React, {Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {View} from 'react-native';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="apps" />
            <Text uppercase={false}>Dashboard</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button>
            <Icon active name="chatboxes" />
            <Text uppercase={false}>Notifications</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button>
            <Icon name="calendar" />
            <Text uppercase={false}>Calendar</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button>
            <Icon name="cog" />
            <Text uppercase={false}>Settings</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
