// @flow

import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

GoogleSignin.configure();

export async function isSignedInWithGoogle() {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    return userInfo;
  } catch (error) {
    return null;
  }
}

export async function signInWithGoogle() {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error) {
    return null;
  }
}

export function signInWithFirebase(idToken: string, accessToken: string) {
  const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
  return firebase.auth().signInWithCredential(credential);
}
