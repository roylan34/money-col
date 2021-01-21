import { getResetPasswordLink } from '../../../redux/auth/action';
import { AnyAction } from 'redux';

export type ResetPasswordDispatchProps = { email: string };

export const sendResetPasswordEmail = (email: string): AnyAction => {
  return getResetPasswordLink(email);
};

export type DispatchFromProps = {
  sendResetPasswordEmail: typeof sendResetPasswordEmail;
};
