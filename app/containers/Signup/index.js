// @flow

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logo } from '../../utils/images';
import { getAllTeams } from '../../redux/actions/teams';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.data.name ?? '',
      phone: '',
      passcode: '',
    };

    this.props.getAllTeams();
  }

    renderButton = () => (
      <Text style={styles.buttonText}>
        {'Register'.toUpperCase()}
      </Text>
    )

    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.container}>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1 }}
            >

              <View style={styles.welcomeContainer}>
                <View style={styles.logoWrapper}>
                  <Image source={Logo} style={{ width: 160, height: 160 }} />
                </View>

                <View style={styles.welcomeTitleWrapper}>
                  <Text style={styles.welcomeText}>Welcome to GTHC</Text>
                </View>

                <View style={styles.welcomeSubTitleWrapper}>
                  <Text style={styles.welcomeSubTitleText}>Tenting made easy</Text>
                </View>
              </View>


              <View style={styles.loginContainer}>
                <View style={styles.textField}>
                  <Text style={styles.textLabel}>Name</Text>
                  <TextInput
                    style={styles.textInput}
                    autoCorrect={false}
                    underlineColorAndroid="#D2D2D3"
                    value={this.state.name}
                    placeholder="Tre Jones"
                    onChangeText={name => this.setState({ name })}
                  />
                </View>

                <View style={styles.textField}>
                  <Text style={styles.textLabel}>Phone Number (optional)</Text>
                  <TextInput
                    style={styles.textInput}
                    autoCorrect={false}
                    underlineColorAndroid="#D2D2D3"
                    placeholder="(555) 555-5555"
                    value={this.state.phone}
                    onChangeText={phone => this.setState({ phone })}
                  />
                </View>

                <View style={styles.textField}>
                  <Text style={styles.textLabel}>Team Passcode</Text>
                  <TextInput
                    style={styles.textInput}
                    autoCorrect={false}
                    underlineColorAndroid="#D2D2D3"
                    placeholder="######"
                    value={this.state.passcode}
                    onChangeText={passcode => this.setState({ passcode })}
                  />
                </View>

                <View style={styles.signinField}>
                  <TouchableHighlight underlayColor="white">
                    <View style={styles.signinButton}>
                      {this.renderButton()}
                    </View>
                  </TouchableHighlight>
                </View>
              </View>

            </ScrollView>
          </View>
        </View>
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
    backgroundColor: '#FCFCFC',
  },
  welcomeContainer: {
    flexDirection: 'column',
  },
  logoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcomeTitleWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeSubTitleWrapper: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    color: '#f4511e',
  },
  welcomeSubTitleText: {
    color: '#AAAAAA',
    fontSize: 15,
  },
  loginContainer: {
    flexDirection: 'column',
    marginTop: 35,
  },
  textField: {
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
    fontSize: 16,
    height: 50,
  },
  signinField: {
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35,
  },
  signinButton: {
    alignItems: 'center',
    borderRadius: 45,
    backgroundColor: '#f4511e',
  },
  buttonText: {
    fontSize: 16,
    padding: 15,
    color: 'white',
  },
});
