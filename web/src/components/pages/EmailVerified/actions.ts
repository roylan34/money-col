import { verifyEmail } from '../../../redux/auth/action';
import { AnyAction } from 'redux';

export const handleVerifyEmail = (oobCode: string): AnyAction => {
  return verifyEmail(oobCode);
};

export type DispatchFromProps = {
  handleVerifyEmail: typeof verifyEmail;
};
