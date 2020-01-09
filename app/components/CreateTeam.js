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
import { Picker, Form, Icon } from 'native-base';
import GenerateRandomCode from 'react-random-code-generator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class CreateTeam extends Component {
  constructor(props) {
    super(props);

    const { name, phone } = this.props.route.params;
    this.state = {
      name: name ?? '',
      phone: phone ?? '',
      teamName: '',
      tentType: 'black',
      teamPasscode: GenerateRandomCode.TextNumCode(3, 2).toUpperCase(),
    };
  }

    renderButton = () => (
      <Text style={styles.buttonText}>
        {'Create team'.toUpperCase()}
      </Text>
    )

    onCreateTeamPressed = () => {
      const { name, phone, teamName, tentType, teamPasscode } = this.state;
      const updatedUserData = {
        type: 'create',
        name,
        phone,
        teamData: {
          name: teamName,
          tentType,
          isCaptain: true,
          passcode: teamPasscode,
        },
      };

      const { id, signupUser } = this.props.route.params;
      signupUser(id, updatedUserData);
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
                  <Text style={styles.textLabel}>Team Name</Text>
                  <TextInput
                    style={styles.textInput}
                    autoCorrect={false}
                    placeholder="Team 43"
                    value={this.state.teamName}
                    onChangeText={teamName => this.setState({ teamName })}
                  />
                </View>

                <View style={styles.textField}>
                  <Text style={styles.textLabel}>Team Passcode</Text>
                  <TextInput
                    editable={false}
                    style={styles.textInput}
                    value={this.state.teamPasscode}
                  />
                </View>

                <View style={styles.textField}>
                  <Text style={styles.textLabel}>Tent Type</Text>
                </View>
                <Form style={styles.dropdown}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Tent Type"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.tentType}
                    onValueChange={(val) => this.setState({ tentType: val })}
                  >
                    <Picker.Item label="Black" value="black" />
                    <Picker.Item label="Blue" value="blue" />
                    <Picker.Item label="White" value="white" />
                    <Picker.Item label="Flex" value="flex" />
                  </Picker>
                </Form>

                <View style={styles.signinField}>
                  <TouchableHighlight
                    underlayColor="white"
                    onPress={() => this.onCreateTeamPressed()}
                  >
                    <View style={styles.registerButton}>
                      {this.renderButton()}
                    </View>
                  </TouchableHighlight>
                </View>
              </View>

            </ScrollView>
          </View>
        </KeyboardAwareScrollView>
      );
    }
}

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
  dropdown: {
    marginHorizontal: 20,
  },
});
