import AuthService from '../../usecases/ports/AuthService';
import {
  FirebaseAuth,
  FirebaseUser,
  EmailAuthProvider,
} from '../../drivers/Firestore';
import 'firebase/app';
import words from '../../constants/words';

export default class AuthServiceFirebaseImpl implements AuthService {
  firebaseAuth: FirebaseAuth;
  emailAuthProvider: EmailAuthProvider;
  sessionPersistence: string;
  secondaryAuth?: FirebaseAuth;

  constructor(
    firebaseAuth: FirebaseAuth,
    emailAuthProvider: EmailAuthProvider,
    secondaryAuth?: FirebaseAuth,
  ) {
    this.firebaseAuth = firebaseAuth;
    this.emailAuthProvider = emailAuthProvider;
    this.sessionPersistence = 'session';
    this.secondaryAuth = secondaryAuth;
  }

  async applyActionCode(oobCode: string): Promise<void> {
    return this.firebaseAuth.applyActionCode(oobCode);
  }

  sendConfirmationEmail(user: FirebaseUser): void {
    user.sendEmailVerification().catch((error) => console.error(error));
  }

  async verifyEmail(oobCode: string): Promise<void> {
    await this.applyActionCode(oobCode);
    await this.signOut();
  }

  signUp(
    email: string,
    password: string,
    name: string,
  ): Promise<{ id: string }> {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;

        if (user) {
          user
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              this.sendConfirmationEmail(user);
            });
        } else {
          throw new Error();
        }

        const { uid } = user;

        return { id: uid };
      })
      .catch((error) => {
        throw error;
      });
  }

  async signIn(
    email: string,
    password: string,
    saveLoginStatus?: boolean,
  ): Promise<object> {
    try {
      if (saveLoginStatus === false) {
        await this.firebaseAuth.setPersistence(this.sessionPersistence);
      }

      const userCredential = await this.firebaseAuth.signInWithEmailAndPassword(
        email,
        password,
      );

      const { user } = userCredential;

      if (!user) {
        throw new Error(words.errorProcessRequest);
      }

      if (!user.emailVerified) {
        throw new Error(words.verifyEmail);
      }

      const token = await user.getIdToken();
      return { emailVerified: user.emailVerified, token, id: user.uid };
    } catch (error) {
      throw error;
    }
  }

  signOut(): Promise<void> {
    return this.firebaseAuth.signOut().catch((error) => {
      throw error;
    });
  }

  async updateEmail(email: string, password: string): Promise<void> {
    const user = this.firebaseAuth.currentUser;

    if (!user || !user.email) {
      throw new Error('An error occured.');
    }

    const credential = this.emailAuthProvider.credential(user.email, password);

    await user.reauthenticateWithCredential(credential);

    return user
      .updateEmail(email)
      .then(() => this.sendConfirmationEmail(user))
      .catch((error) => {
        throw error;
      });
  }

  updatePassword(password: string): Promise<void> | undefined {
    try {
      const currentUser = this.firebaseAuth.currentUser;
      if (!currentUser) {
        throw new Error();
      }
      return currentUser.updatePassword(password);
    } catch (error) {
      throw error;
    }
  }

  sendPasswordResetEmail(email: string): Promise<void> {
    return this.firebaseAuth.sendPasswordResetEmail(email);
  }

  verifyPasswordResetCode(oobCode: string): Promise<string> {
    return this.firebaseAuth.verifyPasswordResetCode(oobCode);
  }

  confirmPasswordReset(oobCode: string, password: string): Promise<void> {
    return this.firebaseAuth.confirmPasswordReset(oobCode, password);
  }

  getCurrentUserCredentials(): FirebaseUser | null {
    return this.firebaseAuth.currentUser;
  }

  async recoverEmail(
    oobCode: string,
  ): Promise<{ email: string; previousEmail: string }> {
    return this.firebaseAuth.checkActionCode(oobCode).then(async (info) => {
      const {
        data: { email, previousEmail },
      } = info;

      if (!email || !previousEmail) {
        throw new Error('Something went wrong');
      }

      await this.firebaseAuth.applyActionCode(oobCode);

      await this.signOut();
      return { email, previousEmail };
    });
  }

  async createUser(email: string, password: string): Promise<{ id: string }> {
    try {
      if (!this.secondaryAuth) {
        throw new Error('An error occured');
      }

      const userCredential = await this.secondaryAuth.createUserWithEmailAndPassword(
        email,
        password,
      );
      const { user } = userCredential;

      if (!user) {
        throw new Error();
      }

      this.sendConfirmationEmail(user);

      const { uid } = user;

      this.secondaryAuth.signOut();

      return { id: uid };
    } catch (error) {
      throw error;
    }
  }
}
