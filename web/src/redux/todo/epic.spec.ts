/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestScheduler } from 'rxjs/testing';

import { fetchTodosEpic } from './epic';
import { fetchTodos } from './action';
import { fetchTodosResponse } from './action';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Todo } from '../../domain/entities';

const responseFromFetchTodos = [
  {
    id: 'id',
    title: 'title',
    userId: 'userId',
    description: 'description',
    done: true,
  },
];

describe('Name of the group', () => {
  test('should ', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      console.log(`actual: ${JSON.stringify(actual)}`);
      console.log(`expected: ${JSON.stringify(expected)}`);
      expect(actual).toEqual(expected);
    });

    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot('-a', {
        a: fetchTodos('b385b84e-12fd-4690-b87a-48b468c94e55'),
      });
      const state$ = null;
      const dependencies = {
        todoInteractor: {
          fetchTodos: (): ColdObservable<Todo[]> =>
            cold('--a', {
              a: responseFromFetchTodos,
            }),
        },
      };

      const output$ = fetchTodosEpic(action$, state$, dependencies as any);

      expectObservable(output$).toBe('---a', {
        a: fetchTodosResponse(responseFromFetchTodos),
      });
    });
  });
});
