import { FirebaseApp, firebaseConfig } from '../../config';

export default class FirebaseClient {
  firebase: FirebaseApp;

  constructor(firebase: FirebaseApp) {
    this.firebase = firebase;

    this.initializeApp();
  }

  initializeApp(): void {
    if (this.firebase.apps.length === 0) {
      this.firebase.initializeApp(firebaseConfig);
    }
  }
}
