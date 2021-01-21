import { createStore, applyMiddleware, Store } from 'redux';
import { persistReducer, persistStore, Persistor } from 'redux-persist';

import * as Sentry from '@sentry/browser';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import createSentryMiddleware from 'redux-sentry-middleware';

import epic from './epic';
import createRootReducer from './reducer';
import dependencies from './dependencies';

import persistConfig from './persistConfig';

Sentry.init({
  dsn:
    'https://15f29781f43d4a05a9f1f232b73b2d10@o367493.ingest.sentry.io/5238052',
  environment: process.env.NODE_ENV || 'development', // we need to figure out way to automatically set this to `production` if build is release
  beforeSend(event) {
    // filter console.logs from breadcrumbs
    const { breadcrumbs = [] } = event;

    return {
      ...event,
      breadcrumbs: breadcrumbs.filter(
        breadCrumb => breadCrumb.category !== 'console',
      ),
    };
  },
});

const epicMiddleware = createEpicMiddleware({
  dependencies,
});
const sentryMiddleWare = createSentryMiddleware(Sentry, {
  // Optionally pass some options here.
});

export const configureStore = (): // preloadedState: object = {},
{ store: Store; persistor: Persistor } => {
  const persistedReducer = persistReducer(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    persistConfig as any,
    createRootReducer(),
  );
  // const middlewares = [multi, epicMiddleware];
  const middlewares = [epicMiddleware, sentryMiddleWare];

  const store = createStore(
    // connectRouter(history)(persistedReducer),
    persistedReducer,
    // preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  const persistor = persistStore(store);

  epicMiddleware.run(epic);

  return { store, persistor };
};
