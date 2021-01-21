import { fetchPriceMapOfPoints } from '../../../redux/settings/action';
import { AnyAction } from 'redux';

export const fetchPriceMap = (): AnyAction => {
  return fetchPriceMapOfPoints();
};

export type DispatchFromProps = {
  fetchPriceMap: typeof fetchPriceMap;
};
