import { words } from '../../../constants';
import { paths } from '../../../constants/routes/urls';

export const content = {
  resetPassword: {
    title: words.resetPasswordLinkSent,
    instructions: words.resetPasswordLinkInstructions,
  },
  verifyEmail: {
    title: words.registration.registrationComplete,
    instructions: words.registration.emailVerification.instructions,
  },
  recoverEmail: {
    title: words.updateCompleted,
    yourLogInEmail: words.yourLoginEmail,
    hasRevertedTo: words.hasRevertedTo,
    emailRecoveryInfo: words.emailRecoveryInfo,
    resetPassword: words.resetPassword,
    pleaseDoIt: words.pleaseDoIt,
  },
  loginPath: paths.login,
  loginLinkTitle: words.registration.logIn,
  emailNotReceivedPath: paths.resendVerification,
  emailNotReceivedPathTitle: words.registration.confirmationEmailNotReceived,
  resetPasswordLink: paths.resetPasswordLink,
};
