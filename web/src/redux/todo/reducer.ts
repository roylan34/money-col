import { Reducer } from 'redux';
import {
  FETCH_TODOS,
  FETCH_TODOS_RESPONSE,
  FETCH_TODOS_FAILED,
} from './actionType';

export const initialState = {
  todos: [],
  isFetching: false,
  error: '',
};

export type TodoStore = typeof initialState;

const reducer: Reducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        isFetching: true,
        error: '',
      };

    case FETCH_TODOS_RESPONSE:
      return {
        ...state,
        isFetching: false,
        todos: payload.todos,
      };

    case FETCH_TODOS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default reducer;
