import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

if (process.env.REACT_APP_FIREBASE_EMULATOR === 'true') {
  firebase.firestore().settings({
    host: 'localhost:8080',
    ssl: false,
    experimentalForceLongPolling: true,
  }); // Note: this is for testing security rules
  firebase.auth().useEmulator('http://localhost:9099/');
}

export const firestore = firebase.firestore();

export const auth = firebase.auth();

export const storage = firebase.storage();

export const emailAuthProvider = firebase.auth.EmailAuthProvider;

export const timestamp = firebase.firestore.Timestamp;

export type Firestore = firebase.firestore.Firestore;
export type FirebaseAuth = firebase.auth.Auth;
export type FirebaseStorage = firebase.storage.Storage;

export default firebase;
