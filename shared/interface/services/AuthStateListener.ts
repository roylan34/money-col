import { FirebaseUser, FirebaseApp } from '../../drivers/Firestore';

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

export const initializeAuthStateListener = (
  logOut: () => void,
  firebaseConfig: FirebaseConfig,
  firebase: typeof FirebaseApp,
  getUser?: (userId: string) => void,
  authenticatedCallback?: (user: FirebaseUser) => void,
): void => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  firebase.auth().onAuthStateChanged((user: FirebaseUser) => {
    if (user) {
      if (getUser) {
        getUser(user.uid);
      }
      if (authenticatedCallback) {
        authenticatedCallback(user);
      }
    } else {
      logOut();
    }
  });
};
