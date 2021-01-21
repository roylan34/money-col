import AuthService from '../../ports/AuthService';

import { buildSignInUser, signInUserUseCase } from './signin-user';
import { buildSignUpUser, signUpUserUseCase } from './signup-user';
import { buildSignOutUser, signOutUserUseCase } from './signout-user';
import { buildVerifyEmail, verifyEmailUseCase } from './verify-email';
import {
  buildSendResetPasswordEmail,
  sendResetPasswordEmailUseCase,
} from './send-reset-password-email';
import {
  buildVerifyPasswordResetCode,
  verifyPasswordResetCodeUseCase,
} from './verify-password-reset-code';
import {
  buildConfirmPasswordReset,
  confirmPasswordResetUseCase,
} from './confirm-password-reset';
import { buildUpdateEmail, updateEmailUseCase } from './update-email';
import { buildRecoverEmail, recoverEmailUseCase } from './recover-email';
import {
  buildUpdateDefPass,
  updateDefPassUseCase,
} from './update-default-password';

import { createUserUseCase } from '../user/create-user';
import { fetchUserUseCase } from '../user/fetch-user';
import { updateUserUseCase } from '../user/update-user';
import { claimUserGiveawaysUseCase } from '../user/claim-giveaways';

export default (dependencies: {
  authService: AuthService;
  userInteractor: {
    createUser: createUserUseCase;
    fetchUser: fetchUserUseCase;
    updateUser: updateUserUseCase;
    claimUserGiveaways: claimUserGiveawaysUseCase;
  };
}): {
  signInUser: signInUserUseCase;
  signUpUser: signUpUserUseCase;
  verifyEmail: verifyEmailUseCase;
  signOutUser: signOutUserUseCase;
  sendResetPasswordEmail: sendResetPasswordEmailUseCase;
  verifyPasswordResetCode: verifyPasswordResetCodeUseCase;
  confirmPasswordReset: confirmPasswordResetUseCase;
  updateEmail: updateEmailUseCase;
  recoverEmail: recoverEmailUseCase;
  updateDefPass: updateDefPassUseCase;
} => {
  const {
    authService,
    userInteractor: { fetchUser, createUser, updateUser, claimUserGiveaways },
  } = dependencies;

  const signInUser = buildSignInUser({
    authService,
    userInteractor: { fetchUser, updateUser, claimUserGiveaways },
  });

  const signUpUser = buildSignUpUser({
    authService,
    userInteractor: { createUser },
  });

  const signOutUser = buildSignOutUser({ authService });

  const verifyEmail = buildVerifyEmail({ authService });

  const sendResetPasswordEmail = buildSendResetPasswordEmail({ authService });

  const verifyPasswordResetCode = buildVerifyPasswordResetCode({ authService });

  const confirmPasswordReset = buildConfirmPasswordReset({ authService });

  const updateEmail = buildUpdateEmail({ authService });

  const recoverEmail = buildRecoverEmail({
    authService,
  });

  const updateDefPass = buildUpdateDefPass({
    authService,
    userInteractor: { updateUser },
  });

  return {
    signInUser,
    signUpUser,
    signOutUser,
    verifyEmail,
    sendResetPasswordEmail,
    verifyPasswordResetCode,
    confirmPasswordReset,
    updateEmail,
    recoverEmail,
    updateDefPass,
  };
};
