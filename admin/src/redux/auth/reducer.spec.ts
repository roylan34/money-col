import reducer, { initialState } from './reducer';
import { setToken, signInFailure } from './action';
import { SIGN_IN_REQUEST } from './actionType';

describe('auth reducer test', () => {
  test('set token', () => {
    const actual = reducer(initialState, setToken('sample_token'));
    const expected = {
      ...initialState,
      token: 'sample_token',
    };
    expect(actual).toEqual(expected);
  });

  test('sign in failure', () => {
    const actual = reducer(
      initialState,
      signInFailure(new Error('sample error')),
    );
    const expected = {
      ...initialState,
      requests: {
        [SIGN_IN_REQUEST]: {
          pending: false,
        },
      },
      failedRequests: {
        [SIGN_IN_REQUEST]: new Error('sample error'),
      },
    };
    expect(actual).toEqual(expected);
  });
});
