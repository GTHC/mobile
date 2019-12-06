// @flow

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const renderItem = (item: any) => (
  <View style={[styles.item, {height: item.height}]}>
    <Text style={{color: 'white'}}>{item.text}</Text>
    <Text style={{color: 'white'}}>{item.time}</Text>
  </View>
);

const renderEmptyDate = () => <View style={styles.emptyDate} />;

const rowHasChanged = (r1: any, r2: any) => r1.name !== r2.name;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#00adf5',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    color: 'white',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export {renderItem, renderEmptyDate, rowHasChanged};
