import { recoverEmail } from '../../../redux/auth/action';
import { AnyAction } from 'redux';

export type RecoverEmailDispatchProps = { oobCode: string };

export const recoverEmailRequest = (oobCode: string): AnyAction => {
  return recoverEmail(oobCode);
};

export type DispatchFromProps = {
  recoverEmailRequest: typeof recoverEmailRequest;
};
