import { RootStateOrAny } from 'react-redux';

export type StateFromProps = {
  isLoggedIn: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: { token, authenticated },
  } = state;

  const isLoggedIn = authenticated && Boolean(token);

  return {
    isLoggedIn,
  };
};
