import reducer, { initialState } from './reducer';
import {
  setToken,
  signInFailure,
  signUpFailure,
  setEmailVerified,
  setIsAuthenticated,
} from './action';
import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from './actionType';

describe('auth reducer test', () => {
  test('set token', () => {
    const actual = reducer(initialState, setToken('sample_token'));
    const expected = {
      ...initialState,
      token: 'sample_token',
    };
    expect(actual).toEqual(expected);
  });

  test('set emailVerified', () => {
    const actual = reducer(initialState, setEmailVerified(true));
    const expected = {
      ...initialState,
      emailVerified: true,
    };
    expect(actual).toEqual(expected);
  });

  test('set is authenticated', () => {
    const actual = reducer(initialState, setIsAuthenticated(false));
    const expected = {
      ...initialState,
      authenticated: false,
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
      failedRequests: {
        [SIGN_IN_REQUEST]: new Error('sample error'),
      },
    };
    expect(actual).toEqual(expected);
  });

  test('sign up failure', () => {
    const actual = reducer(
      initialState,
      signUpFailure(new Error('sample sign up error')),
    );
    const expected = {
      ...initialState,
      failedRequests: {
        [SIGN_UP_REQUEST]: new Error('sample sign up error'),
      },
    };
    expect(actual).toEqual(expected);
  });
});
