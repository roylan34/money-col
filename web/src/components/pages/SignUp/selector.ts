import { RootStateOrAny } from 'react-redux';
import { SIGN_UP_REQUEST } from '../../../redux/auth/actionType';

export type StateFromProps = {
  signUpError: string;
  isSignedUp: boolean;
  isSignUpPending: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: { failedRequests, successfulRequests, requests },
  } = state;

  const signUpError =
    failedRequests && failedRequests[SIGN_UP_REQUEST]
      ? failedRequests[SIGN_UP_REQUEST].message
      : '';

  const isSignedUp = Boolean(
    successfulRequests && successfulRequests[SIGN_UP_REQUEST],
  );

  const isSignUpPending =
    requests[SIGN_UP_REQUEST] && requests[SIGN_UP_REQUEST].pending;

  return {
    isSignedUp,
    signUpError,
    isSignUpPending,
  };
};
