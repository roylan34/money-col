import { AnyAction } from 'redux';
import {
  ADD_GIVEAWAY_FAILURE,
  ADD_GIVEAWAY_REQUEST,
  ADD_GIVEAWAY_SUCCESS,
} from './actionType';

export const addScheduledGiveaway = (params: {
  points: number;
  effectiveDate: Date;
}): AnyAction => ({
  type: ADD_GIVEAWAY_REQUEST,
  payload: { params },
});

export const addScheduledGiveawaySuccess = (response: Object): AnyAction => ({
  type: ADD_GIVEAWAY_SUCCESS,
  payload: { response },
});

export const addScheduledGiveawayFailure = (
  error: Error | string,
): AnyAction => ({
  type: ADD_GIVEAWAY_FAILURE,
  payload: { error },
});
