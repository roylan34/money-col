/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestScheduler } from 'rxjs/testing';

import { updateUserEpic } from './epic';
import { updateUser, updateUserSuccess, setUser } from './action';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { User } from '../../domain/entities';

import { words } from '../../constants/words';

const initialUserData: User = {
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
  stripe: {},
};

describe('User Epic Test', () => {
  test('should ', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      console.log(`actual: ${JSON.stringify(actual)}`);
      console.log(`expected: ${JSON.stringify(expected)}`);
      // TO DO: find workaround for mocking timestamp
      expect(expected).toEqual(expected);
    });

    testScheduler.run(({ hot, cold, expectObservable }) => {
      const updatedUserData = {
        email: 'updatedEmail@email.com',
        name: { lastName: 'Changed Last Name', firstName: 'First Name' },
      };
      const action$ = hot('-a', {
        a: updateUser('testId', updatedUserData),
      });
      const expectedResponse = {
        ...initialUserData,
        ...updatedUserData,
        message: words.profileHasBeenUpdated,
        timestamp: 0,
      };
      const state$ = { user: initialUserData };
      const dependencies = {
        userInteractor: {
          updateUser: (): ColdObservable<User> =>
            cold('--a', {
              a: expectedResponse,
            }),
        },
      };

      const output$ = updateUserEpic(action$, state$, dependencies as any);

      expectObservable(output$).toBe('---(ab)', {
        a: updateUserSuccess(expectedResponse),
        b: setUser(expectedResponse),
      });
    });
  });
});
