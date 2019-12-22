// @flow

import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import {CalendarModal} from './CalendarModal';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      forecast: [],
      error: '',
    };
  }
  getLocation() {
    // Get the current position of the user
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(
          prevState => ({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
          () => {
            this.getWeather();
          },
        );
      },
      error => this.setState({forecast: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  getWeather() {
    // Construct the API url to call
    let url =
      'https://api.openweathermap.org/data/2.5/forecast?lat=' +
      this.state.latitude +
      '&lon=' +
      this.state.longitude +
      '&units=metric&appid=734bff6c94faf86e71390520d5252983';

    // Call the API, and set the state of the weather forecast
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState((prevState, props) => ({
          forecast: data,
        }));
      });
  }

  render() {
    return <CalendarModal />;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  modal: {
    alignItems: 'center',
  },
  text: {
    color: '#3f2949',
  },
});
