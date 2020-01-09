// @flow

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Input } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAllTeams } from '../../redux/actions/teams';
import { signupUser } from '../../redux/actions/user';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.data.name ?? '',
      phone: '',
      passcode: '',
      passcodeError: false,
    };

    this.props.getAllTeams();
  }

    renderButton = () => (
      <Text style={styles.buttonText}>
        {'Join'.toUpperCase()}
      </Text>
    )

    onRegisterPressed = () => {
      const team = this.findTeamWithPasscode();
      this.setState({ passcodeError: team === undefined });

      if (team === undefined) {
        return;
      }

      // eslint-disable-next-line camelcase
      const { id, name, tent_type, passcode } = team;
      const updatedUserData = {
        type: 'join',
        name: this.state.name,
        phone: this.state.phone,
        teamData: {
          name,
          teamID: id,
          tentType: tent_type,
          isCaptain: false,
          passcode,
        },
      };

      this.props.signupUser(this.props.user.data.id, updatedUserData);
    }

    findTeamWithPasscode = () => {
      const { passcode } = this.state;
      const teams = this.props.teams.all;
      const match = teams.find(team => team.passcode.toLowerCase() === passcode.toLowerCase());
      return match;
    }

  onCreateTeamPressed = () => {
    const { name, phone } = this.state;
    const { user } = this.props;
    this.props.navigation.navigate('CreateTeam',
      { name, phone, id: user.data.id, signupUser: this.props.signupUser });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
      >
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View style={styles.loginContainer}>
              <View style={styles.textField}>
                <Text style={styles.textLabel}>Name</Text>
                <TextInput
                  style={styles.textInput}
                  autoCorrect={false}
                  value={this.state.name}
                  placeholder="Tre Jones"
                  onChangeText={name => this.setState({ name })}
                />
              </View>

              <View style={styles.textField}>
                <Text style={styles.textLabel}>Phone Number</Text>
                <TextInput
                  style={styles.textInput}
                  autoCorrect={false}
                  placeholder="(555) 555-5555"
                  value={this.state.phone}
                  onChangeText={phone => this.setState({ phone })}
                />
              </View>

              <View style={styles.textField}>
                <Text style={styles.textLabel}>Team Passcode</Text>
                <Input
                  style={styles.textInput}
                  autoCorrect={false}
                  placeholder="*****"
                  value={this.state.passcode}
                  onChangeText={passcode => this.setState({ passcode })}
                />
                {this.state.passcodeError
                    && <Text style={styles.invalidPasscodeText}>Invalid passcode</Text>}
              </View>

              <View style={styles.signinField}>
                <TouchableHighlight
                  underlayColor="white"
                  onPress={() => this.onRegisterPressed()}
                >
                  <View style={styles.registerButton}>
                    {this.renderButton()}
                  </View>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.signupContainer}>
              <TouchableHighlight onPress={this.onCreateTeamPressed} underlayColor="white">
                <Text style={styles.signupLabel}>{'Don\'t have a team? Create one!'}</Text>
              </TouchableHighlight>

            </View>

          </ScrollView>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  teams: state.teams,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllTeams,
      signupUser,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  loginContainer: {
    flexDirection: 'column',
    marginTop: 35,
  },
  invalidPasscodeText: {
    color: 'red',
  },
  textField: {
    marginTop: 16,
    flexDirection: 'column',
    marginLeft: 35,
    marginRight: 35,
  },
  textLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#AAAAAA',
  },
  textInput: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#D2D2D3',
    fontSize: 16,
    height: 50,
    color: 'black',
  },
  signinField: {
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35,
  },
  registerButton: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
  },
  buttonText: {
    fontSize: 16,
    padding: 15,
    color: 'white',
  },
  signupContainer: {
    flex: 0.3,
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupLabel: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#00adf5',
  },
});
