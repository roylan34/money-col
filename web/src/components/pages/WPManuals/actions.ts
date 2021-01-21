import { fetchPostsBySlug } from '../../../redux/wpPost/action';
import { AnyAction } from 'redux';

export type LoginDispatchProps = { email: string; password: string };

export const fetchWPManuals = (slug: string): AnyAction => {
  return fetchPostsBySlug(slug);
};

export type DispatchFromProps = {
  fetchWPManuals: typeof fetchWPManuals;
};
