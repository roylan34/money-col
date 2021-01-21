import storage from 'redux-persist/lib/storage';
import { createBlacklistFilter } from 'redux-persist-transform-filter';

import { AuthStore } from './auth/reducer';
import { UserStore } from './user/reducer';

const authBlacklist: Array<keyof AuthStore> = [
  'failedRequests',
  'succeededRequests',
  'id',
];

const authPersistKeysTransform = createBlacklistFilter('auth', authBlacklist);

const userBlacklist: Array<keyof UserStore> = [
  'failedRequests',
  'successfulRequests',
];
const userPersistKeysTransform = createBlacklistFilter('user', userBlacklist);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user'],
  transforms: [authPersistKeysTransform, userPersistKeysTransform],
};

export default persistConfig;
