import { combineEpics } from 'redux-observable';

import todo from './todo/epic';
import auth from './auth/epic';
import user from './user/epic';
import videoLecture from './videoLecture/epic';
import manual from './manual/epic';
import news from './news/epic';
import EAProgram from './EAProgram/epic';
import wpPost from './wpPost/epic';
import purchase from './purchase/epic';
import projectContent from './projectContent/epic';
import conversation from './conversation/epic';
import settings from './settings/epic';

export default combineEpics(
  todo,
  auth,
  user,
  videoLecture,
  manual,
  news,
  EAProgram,
  wpPost,
  purchase,
  projectContent,
  conversation,
  settings,
);
