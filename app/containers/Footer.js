import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="apps" />
              <Text uppercase={false}>Dashboard</Text>
            </Button>
            <Button vertical>
              <Icon active name="chatboxes" />
              <Text uppercase={false}>Notifications</Text>
            </Button>
            <Button vertical>
              <Icon name="calendar" />
              <Text uppercase={false}>Calendar</Text>
            </Button>
            <Button vertical>
              <Icon name="cog" />
              <Text uppercase={false}>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
