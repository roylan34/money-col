import { combineEpics } from 'redux-observable';

import auth from './auth/epic';
import user from './user/epic';
import instructor from './instructor/epic';
import videoLecture from './videoLecture/epic';
import projectContent from './projectContent/epic';
import eaProgram from './eaProgram/epic';
import manual from './manual/epic';
import conversation from './conversation/epic';
import subscriber from './subscriber/epic';
import paymentHistory from './paymentHistory/epic';
import giveaway from './giveaway/epic';

export default combineEpics(
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
);
