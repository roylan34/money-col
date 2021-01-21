import words from '../constants/words';

export const fireBaseError = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/wrong-password':
      return words.passwordIsInvalid;
    case 'auth/email-already-in-use':
      return words.emailAlreadyInUse;
    case 'auth/user-not-found':
      return words.userNotFound;

    default:
      return words.somethingWentWrong;
  }
};
