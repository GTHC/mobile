// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Container, Content, Text, Card, CardItem} from 'native-base';

import TeamSettingsModal from './TeamSettingsModal';

class TeamSettings extends Component {
  componentWillMount() {
    this.props.getAllShifts();
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{margin: 25}}>
          <Card>
            <CardItem>
              <Text>Team Name: Team GTHC</Text>
            </CardItem>
            <CardItem>
              <Text>Tent Type: Black</Text>
            </CardItem>
            <CardItem>
              <Text>Passcode: ADC9L</Text>
            </CardItem>
          </Card>
          <TeamSettingsModal />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  shifts: state.shifts,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamSettings);
