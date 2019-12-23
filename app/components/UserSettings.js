// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Body,
} from 'native-base';

export default class UserSettings extends Component {
  renderSimpleListItem = (primary, secondary) => (
    <ListItem style={styles.listItem}>
      <Body>
        <Text style={styles.primaryText}>{primary}</Text>
        <Text style={styles.secondaryText}>{secondary}</Text>
      </Body>
    </ListItem>
  )

  render() {
    const { user } = this.props;

    return (
      <Container>
        <Content>
          <List>
            {this.renderSimpleListItem('Name', user.data.name)}
            {this.renderSimpleListItem('NetId', user.data.netid)}
            {this.renderSimpleListItem('Email', user.data.email)}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 4,
  },
  primaryText: {
  },
  secondaryText: {
    color: '#808080',
  },
});
