// @flow

import React, { PureComponent } from 'react';
import { Container, Content, Spinner } from 'native-base';

export default class LoadingScreen extends PureComponent {
  render() {
    return (
      <Container>
        <Content>
          <Spinner color="black" />
        </Content>
      </Container>
    );
  }
}
