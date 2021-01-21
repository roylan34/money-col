import { RootStateOrAny } from 'react-redux';
import { PreviewCardParams } from '../../organisms/MovieItem/types';
import { Purchase } from '../../../domain/entities';
import { FETCH_PURCHASE_REQUEST } from '../../../redux/purchase/actionType';

export type StateFromProps = {
  purchasedVideosAndProjects: {
    videos: Array<PreviewCardParams>;
    projectContents: Array<PreviewCardParams>;
  };
  userId: string;
  purchases: { [key: string]: Purchase };
  isFetching: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    user: { id },
    purchase: { purchasedVideosAndProjects, purchases, requests },
  } = state;

  const isFetching =
    requests[FETCH_PURCHASE_REQUEST] &&
    (requests[FETCH_PURCHASE_REQUEST].pending as boolean);

  const videos = purchasedVideosAndProjects.videoLectures;
  // const projectContents = purchasedVideosAndProjects.projectContents;
  const projectContents = Array<PreviewCardParams>();

  return {
    purchasedVideosAndProjects: {
      videos,
      projectContents,
    },
    userId: id,
    purchases,
    isFetching,
  };
};
