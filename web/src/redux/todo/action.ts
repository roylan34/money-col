import { AnyAction } from 'redux';

import { Todo } from '../../domain/entities';
import {
  FETCH_TODOS,
  FETCH_TODOS_RESPONSE,
  FETCH_TODOS_FAILED,
} from './actionType';

export const fetchTodos: (userId: string) => AnyAction = userId => ({
  type: FETCH_TODOS,
  payload: {
    userId,
  },
});

export const fetchTodosResponse: (todos: Todo[]) => AnyAction = todos => ({
  type: FETCH_TODOS_RESPONSE,
  payload: {
    todos,
  },
});

export const fetchTodosFailed: (error: string) => AnyAction = (
  error,
): AnyAction => ({
  type: FETCH_TODOS_FAILED,
  payload: {
    error,
  },
});
