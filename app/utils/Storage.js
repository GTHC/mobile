// @flow

import {AsyncStorage} from 'react-native';

const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
};

// eslint-disable-next-line consistent-return
const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return e;
  }
};

export { storeData, getData };
