import { combineReducers, Reducer } from 'redux';

import auth from './auth/reducer';
import app from './app/reducer';
import user from './user/reducer';
import instructor from './instructor/reducer';
import videoLecture from './videoLecture/reducer';
import projectContent from './projectContent/reducer';
import eaProgram from './eaProgram/reducer';
import manual from './manual/reducer';
import conversation from './conversation/reducer';
import subscriber from './subscriber/reducer';
import paymentHistory from './paymentHistory/reducer';
import giveaway from './giveaway/reducer';

export default (): Reducer =>
  combineReducers({
    app,
    auth,
    user,
    instructor,
    videoLecture,
    projectContent,
    eaProgram,
    manual,
    conversation,
    subscriber,
    paymentHistory,
    giveaway,
  });
