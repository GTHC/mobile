// @flow

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BottomTabNavigator from './BottomTabNavigator';
import Login from '../containers/Login';
import Settings from '../containers/Settings';
import { getUserFromToken } from '../redux/actions/user';


const Stack = createStackNavigator();

class AppNavigator extends React.Component {
  constructor(props) {
    super(props);

    this.props.getUserFromToken();
  }

  render() {
    const { user } = this.props;
    // const initRoute = (!user.isLoggedIn && !user.isLoading) ? 'Login' : 'Settings';
    const initRoute = 'Home';

    return (
      <Stack.Navigator initialRouteName={initRoute}>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={({ route }) => ({
            title: 'GTHC',
            headerRight: () => (
              <Icon.Button
                backgroundColor={mainHeader.headerStyle.backgroundColor}
                name="ios-settings"
                size={24}
                color="white"
              />
            ),
            ...mainHeader,
          })}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Settings" component={Settings} options={{ ...mainHeader }} />
      </Stack.Navigator>
    );
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
