import Immutable from 'immutable';
import reducer, { initialState } from './reducer';
import { setPriceMapOfPoints } from './action';

describe('settings reducer test', () => {
  const PRICE_MAP: { [key: string]: number } = {
    '10pts': 1000,
    '50pts': 5000,
    '100pts': 10000,
    '500pts': 50000,
  };

  test('set price map of points', () => {
    const actual = reducer(
      initialState,
      setPriceMapOfPoints({ priceMapOfPoints: PRICE_MAP }),
    );

    const expected = Immutable.fromJS(initialState)
      .mergeDeep(initialState, { priceMapOfPoints: PRICE_MAP })
      .toJS();

    expect(actual).toEqual(expected);
  });
});
