import { FirebaseUser } from '../../drivers/Firestore';
export default interface AuthService {
  signIn(
    email: string,
    password: string,
    saveLoginStatus?: boolean,
  ): Promise<object>;
  signUp(
    email: string,
    password: string,
    name: string,
  ): Promise<{ id: string }>;
  createUser(email: string, password: string): Promise<{ id: string }>;
  signOut(): Promise<void>;
  verifyEmail(oobCode: string): Promise<void>;
  sendPasswordResetEmail(email: string): Promise<void>;
  verifyPasswordResetCode(oobCode: string): Promise<string>;
  confirmPasswordReset(oobCode: string, password: string): Promise<void>;
  updateEmail(email: string, password: string): Promise<void>;
  recoverEmail(
    oobCode: string,
  ): Promise<{ email: string; previousEmail: string }>;
  updatePassword(password: string): Promise<void> | undefined;
  getCurrentUserCredentials(): FirebaseUser | null;
}
