import {
  resetPassword,
  verifyPasswordOobCode,
} from '../../../redux/auth/action';
import { AnyAction } from 'redux';

export type ResetPasswordDispatchProps = { oobCode: string; password: string };

export const submitNewPassword = (
  oobCode: string,
  password: string,
): AnyAction => {
  return resetPassword(oobCode, password);
};

export const verifyPasswordActionCode = (oobCode: string): AnyAction => {
  return verifyPasswordOobCode(oobCode);
};

export type DispatchFromProps = {
  submitNewPassword: typeof submitNewPassword;
  verifyPasswordActionCode: typeof verifyPasswordActionCode;
};
