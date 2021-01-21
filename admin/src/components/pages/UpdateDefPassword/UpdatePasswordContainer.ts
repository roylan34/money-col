import { connect, RootStateOrAny } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

import UpdatePasswordPage from './UpdatePassword';
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

export default connect<StateFromProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps,
)(UpdatePasswordPage);
