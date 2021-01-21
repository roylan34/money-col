import { connect, RootStateOrAny } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { withRouter } from 'react-router-dom';

import selector, { StateFromProps } from './selector';
import { DispatchFromProps } from './actions';
import * as Action from './actions';

import Mypage from './MyPage';

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
  )(Mypage),
);
