import { AnyAction } from 'redux';
import { fetchVideos } from '../../../redux/videoLecture/action';
import { fetchProjectContents } from '../../../redux/projectContent/action';
import { fetchManuals } from '../../../redux/manual/action';

export const getVideoContent = (id: string): AnyAction => {
  return fetchVideos({ where: [['id', '==', id]] });
};

export const getProjectContent = (id: string): AnyAction => {
  return fetchProjectContents({ where: [['id', '==', id]] });
};

export const getManual = (id: string): AnyAction => {
  return fetchManuals({ where: [['id', '==', id]] });
};

export type DispatchFromProps = {
  getVideoContent: typeof getVideoContent;
  getProjectContent: typeof getProjectContent;
  getManual: typeof getManual;
};
