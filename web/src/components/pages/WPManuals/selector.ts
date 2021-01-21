import { RootStateOrAny } from 'react-redux';
import { FETCH_POSTS_BY_SLUG_REQUEST } from '../../../redux/wpPost/actionType';
import { WPPost } from '../../../domain/entities';

export type StateFromProps = {
  wpManuals: { [key: string]: WPPost };
  hasFetchedWPManual: boolean;
  fetchWPManualError: string;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    wpPost: { posts, failedRequests, successfulRequests },
  } = state;

  const wpManuals = posts;

  const fetchWPManualError =
    failedRequests &&
    failedRequests[FETCH_POSTS_BY_SLUG_REQUEST] &&
    failedRequests[FETCH_POSTS_BY_SLUG_REQUEST].message;

  const hasFetchedWPManual =
    successfulRequests && successfulRequests[FETCH_POSTS_BY_SLUG_REQUEST];

  return {
    wpManuals,
    hasFetchedWPManual,
    fetchWPManualError,
  };
};
