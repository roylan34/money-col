import { RootStateOrAny } from 'react-redux';
import { VideoLecture, ProjectContent, Manual } from '../../../domain/entities';

export type StateFromProps = {
  videos: { [key: string]: VideoLecture };
  projectContents: { [key: string]: ProjectContent };
  manuals: { [key: string]: Manual };
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    videoLecture: { videos },
    projectContent: { projectContents },
    manual: { manuals },
  } = state;

  return {
    videos,
    projectContents,
    manuals,
  };
};
