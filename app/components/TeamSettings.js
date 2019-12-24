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

export default class TeamSettings extends Component {
    renderSimpleListItem = (primary, secondary) => (
      <ListItem style={styles.listItem}>
        <Body>
          <Text style={styles.primaryText}>{primary}</Text>
          <Text style={styles.secondaryText}>{secondary}</Text>
        </Body>
      </ListItem>
    )

    render() {
      const { team } = this.props;

      return (
        <Container>
          <Content />
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
