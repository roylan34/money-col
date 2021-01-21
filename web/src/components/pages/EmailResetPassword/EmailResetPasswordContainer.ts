import { connect, RootStateOrAny } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { withRouter } from 'react-router-dom';

import EmailResetPasswordPage from './EmailResetPassword';
import * as Action from './actions';
import selector, { StateFromProps } from './selector';
import { DispatchFromProps } from './actions';

const mapStateToProps = (state: RootStateOrAny): StateFromProps => {
  return selector(state);
};

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
): DispatchFromProps => {
  return bindActionCreators(Action, dispatch);
};

export default withRouter(
  connect<StateFromProps, DispatchFromProps>(
    mapStateToProps,
    mapDispatchToProps,
  )(EmailResetPasswordPage),
);
