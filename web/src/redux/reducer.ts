import { combineReducers, Reducer } from 'redux';

import todo from './todo/reducer';
import auth from './auth/reducer';
import app from './app/reducer';
import user from './user/reducer';
import videoLecture from './videoLecture/reducer';
import manual from './manual/reducer';
import news from './news/reducer';
import EAProgram from './EAProgram/reducer';
import wpPost from './wpPost/reducer';
import purchase from './purchase/reducer';
import projectContent from './projectContent/reducer';
import conversation from './conversation/reducer';
import settings from './settings/reducer';

export default (): Reducer =>
  combineReducers({
    app,
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
  });
