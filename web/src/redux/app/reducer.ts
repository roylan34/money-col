import Immutable from 'immutable';
import { REHYDRATE } from 'redux-persist/es/constants';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

export const initialState = {
  rehydrateComplete: false,
};

export type AuthStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { type } = action;
  switch (type) {
    case REHYDRATE: {
      return Immutable.fromJS(state)
        .updateIn(['rehydrateComplete'], () => true)
        .toJS();
    }
    default:
      return state;
  }
};
