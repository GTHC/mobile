// @flow

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BottomTabNavigator from './BottomTabNavigator';
import Login from '../containers/Login';
import Settings from '../containers/Settings';
import LoadingScreen from '../components/LoadingScreen';
import ShiftView from '../components/ShiftView';
import Signup from '../containers/Signup';
import { getUserFromToken } from '../redux/actions/user';
import OneSignal from 'react-native-onesignal';


const Stack = createStackNavigator();

class AppNavigator extends React.Component {
  constructor(props) {
    super(props);

    this.props.getUserFromToken();
  }

  renderApp = (user) => {
    const loggedInInitialRoute = user.data.team_id == null ? 'Signup' : 'Home';
    const initRoute = !user.isLoggedIn ? 'Login' : loggedInInitialRoute;

    OneSignal.setExternalUserId(user.data.netid);

    return (
      <Stack.Navigator initialRouteName={initRoute}>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={({ navigation }) => ({
            title: 'GTHC',
            headerLeft: null,
            headerRight: () => (
              <Icon.Button
                backgroundColor={mainHeader.headerStyle.backgroundColor}
                name="ios-settings"
                size={24}
                color="white"
                onPress={() => navigation.navigate('Settings')}
              />
            ),
            ...mainHeader,
          })}
        />
        <Stack.Screen
          name="ShiftView"
          component={ShiftView}
          options={{
            title: 'Shift',
            ...mainHeader,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Settings" component={Settings} options={{ ...mainHeader }} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Register' }} />
      </Stack.Navigator>
    );
  }

  render() {
    const { user } = this.props;
    return user.isLoading ? <LoadingScreen /> : this.renderApp(user);
  }
}

const mainHeader = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUserFromToken,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppNavigator);
