import { AnyAction } from 'redux';
import {
  FETCH_PRICE_MAP_REQUEST,
  FETCH_PRICE_MAP_SUCCESS,
  FETCH_PRICE_MAP_FAILURE,
  SET_PRICE_MAP,
} from './actionType';

export const setPriceMapOfPoints = (priceMapOfPoints: {
  priceMapOfPoints: { [key: string]: number };
}): AnyAction => ({
  type: SET_PRICE_MAP,
  payload: priceMapOfPoints,
});

export const fetchPriceMapOfPoints = (): AnyAction => ({
  type: FETCH_PRICE_MAP_REQUEST,
});

export const fetchPriceMapOfPointsSuccess = (response: Object): AnyAction => ({
  type: FETCH_PRICE_MAP_SUCCESS,
  payload: { response },
});

export const fetchPriceMapOfPointsFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_PRICE_MAP_FAILURE,
  payload: { error },
});
