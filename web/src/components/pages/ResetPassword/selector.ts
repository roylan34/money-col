import { RootStateOrAny } from 'react-redux';
import {
  RESET_PASSWORD_REQUEST,
  VERIFY_PASSWORD_OOBCODE_REQUEST,
} from '../../../redux/auth/actionType';

export type StateFromProps = {
  didResetPassword: boolean;
  resetPasswordError: string;
  isPasswordResetCodeValid: boolean;
  passwordResetCodeError: string;
  isLoggedIn: boolean;
  isResetPasswordPending: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: {
      failedRequests,
      successfulRequests,
      token,
      authenticated,
      requests,
    },
  } = state;

  const resetPasswordError =
    failedRequests && failedRequests[RESET_PASSWORD_REQUEST]
      ? failedRequests[RESET_PASSWORD_REQUEST].message
      : '';

  const didResetPassword = Boolean(
    successfulRequests && successfulRequests[RESET_PASSWORD_REQUEST],
  );

  const isPasswordResetCodeValid = Boolean(
    successfulRequests && successfulRequests[VERIFY_PASSWORD_OOBCODE_REQUEST],
  );

  const passwordResetCodeError =
    failedRequests && failedRequests[VERIFY_PASSWORD_OOBCODE_REQUEST]
      ? failedRequests[VERIFY_PASSWORD_OOBCODE_REQUEST].message
      : '';

  const isResetPasswordPending =
    requests[RESET_PASSWORD_REQUEST] &&
    requests[RESET_PASSWORD_REQUEST].pending;

  const isLoggedIn = authenticated && Boolean(token);

  return {
    didResetPassword,
    resetPasswordError,
    isPasswordResetCodeValid,
    passwordResetCodeError,
    isLoggedIn,
    isResetPasswordPending,
  };
};
