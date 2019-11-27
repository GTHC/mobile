import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native';
import { View } from 'react-native';

export default class AppFooter extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button>
              <Link to={'/'}>
              <Icon name="apps" />
              </Link>
              <Text uppercase={false}>Dashboard</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button>
              <Link to={'/notify'}>
              <Icon active name="chatboxes" />
              </Link>
              <Text uppercase={false}>Notifications</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button>
              <Link to={'/shifts'}>
              <Icon name="calendar" />
              </Link>
              <Text uppercase={false}>Calendar</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button>
            <Link to={'/settings'}>
            <Icon name="cog" />
            </Link>
            <Text uppercase={false}>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
