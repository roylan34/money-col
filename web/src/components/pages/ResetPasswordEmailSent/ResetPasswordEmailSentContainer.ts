import { connect, RootStateOrAny } from 'react-redux';

import ResetPasswordEmailSent from './ResetPasswordEmailSent';
import selector, { StateFromProps } from './selector';

const mapStateToProps = (state: RootStateOrAny): StateFromProps => {
  return selector(state);
};

export default connect<StateFromProps, null>(
  mapStateToProps,
  null,
)(ResetPasswordEmailSent);
