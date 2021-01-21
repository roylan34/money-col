import { connect, RootStateOrAny } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { withRouter } from 'react-router-dom';

import EmailVerifiedPage from './EmailVerified';
import selector, { StateFromProps } from './selector';
import * as Action from './actions';

const mapStateToProps = (state: RootStateOrAny): StateFromProps => {
  return selector(state);
};

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
): Action.DispatchFromProps => {
  return bindActionCreators(Action, dispatch);
};

export default withRouter(
  connect<StateFromProps>(
    mapStateToProps,
    mapDispatchToProps,
  )(EmailVerifiedPage),
);
