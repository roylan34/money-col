import Immutable from 'immutable';
import reducer, { initialState } from './reducer';
import { setUser, clearUser } from './action';
import { User } from '../../domain/entities';

describe('user reducer test', () => {
  const USER_DATA: User = {
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
    stripe: {},
    subscriberProfile: {
      rank: {
        score: 0,
        title: 'レギュラー',
        percentage: 0,
      },
      hasUnreadMessage: false,
      points: 0,
      subscribedToMailingList: false,
    },
  };

  test('set user', () => {
    const actual = reducer(initialState, setUser(USER_DATA));

    const expected = Immutable.fromJS(initialState)
      .mergeDeep(initialState, USER_DATA)
      .toJS();

    expect(actual).toEqual(expected);
  });
  test('clear user', () => {
    const initialUserState = reducer(initialState, setUser(USER_DATA));
    const actual = reducer(initialUserState, clearUser());
    const expected = {
      ...initialState,
    };
    expect(actual).toEqual(expected);
  });
});
