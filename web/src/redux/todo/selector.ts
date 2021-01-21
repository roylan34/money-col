import { createSelector } from 'reselect';
import { RootStateOrAny } from 'react-redux';
import { Todo } from '../../domain/entities';
import { TodoStore } from './reducer';

const todoStore = (state: RootStateOrAny): TodoStore => state.todo;

const todos = (state: RootStateOrAny): Todo[] => todoStore(state).todos;

export const doneTodos = createSelector([todos], (alltodos: Todo[]) =>
  alltodos.filter((todo: Todo) => todo.done),
);
