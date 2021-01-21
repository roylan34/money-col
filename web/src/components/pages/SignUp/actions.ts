import { signUp } from '../../../redux/auth/action';
import { AnyAction } from 'redux';

export const register = (
  email: string,
  password: string,
  lastName: string,
  firstName: string,
  subscribedToMailingList: boolean,
): AnyAction => {
  return signUp(email, password, lastName, firstName, subscribedToMailingList);
};

export type DispatchFromProps = {
  register: typeof register;
};
