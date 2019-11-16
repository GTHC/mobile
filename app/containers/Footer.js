import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Dashboard</Text>
            </Button>
            <Button vertical active>
              <Icon active name="chatboxes" />
              <Text>Announcements</Text>
            </Button>
            <Button vertical>
              <Icon name="calendar" />
              <Text>Calendar</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
