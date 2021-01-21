import reducer, { initialState } from './reducer';
import { fetchTodos, fetchTodosResponse, fetchTodosFailed } from './action';
import { Todo } from '../../domain/entities';

describe('todo reducer test', () => {
  test('fetchTodos', () => {
    const actual = reducer(
      initialState,
      fetchTodos('7e4e0ca3-e2fd-4e8e-a266-6e6c5093d63d'),
    );
    const expected = { todos: [], isFetching: true, error: '' };
    expect(actual).toEqual(expected);
  });

  test('fetchTodosResponse', () => {
    const todos: Todo[] = [
      {
        title: '',
        userId: '425c1c9e-6bd0-468d-ad35-12bef257d51a',
        description: 'asd',
        id: '196353bc-215a-44ad-bf66-6e812e4ff0ba',
        done: false,
      },
    ];
    const actual = reducer(initialState, fetchTodosResponse(todos));
    const expected = { todos, isFetching: false, error: '' };
    expect(actual).toEqual(expected);
  });

  test('fetchTodosFailed', () => {
    const actual = reducer(
      initialState,
      fetchTodosFailed('something went wrong'),
    );
    const expected = {
      todos: [],
      isFetching: false,
      error: 'something went wrong',
    };
    expect(actual).toEqual(expected);
  });
});
