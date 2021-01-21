/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestScheduler } from 'rxjs/testing';

import { signUpEpic } from './epic';
import { signUp, signUpSuccess } from './action';
import { setUser } from '../user/action';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { User } from '../../domain/entities';

// @ts-ignore
const responsefromSignUpUser: User = {
  name: {
    firstName: 'FirstName',
    lastName: 'LastName',
  },
  email: 'hello@email.com',
  photoURL: '',
  roles: {
    lecturer: false,
    subscriber: true,
    admin: false,
  },
  id: 'testId',
  subscriberProfile: {
    rank: {
      score: 0,
      title: 'レギュラー',
      percentage: 0,
    },
    subscribedToMailingList: false,
    hasUnreadMessage: false,
    points: 0,
  },
};

describe('Auth Epic Test', () => {
  test('should ', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      console.log(`actual: ${JSON.stringify(actual)}`);
      console.log(`expected: ${JSON.stringify(expected)}`);
      expect(actual).toEqual(expected);
    });

    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot('-a', {
        a: signUp(
          'hello@email.com',
          'password1234',
          'Last Name',
          'First Name',
          false,
        ),
      });
      const state$ = null;
      const dependencies = {
        authInteractor: {
          signUpUser: (): ColdObservable<User> =>
            cold('--a', {
              a: responsefromSignUpUser,
            }),
        },
      };

      const output$ = signUpEpic(action$, state$, dependencies as any);

      expectObservable(output$).toBe('---(ab)', {
        a: signUpSuccess(responsefromSignUpUser),
        b: setUser(responsefromSignUpUser),
      });
    });
  });
});
