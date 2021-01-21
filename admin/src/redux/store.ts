import { createStore, applyMiddleware, Store } from 'redux';
import { persistReducer, persistStore, Persistor } from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';
// import multi from 'redux-multi';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import epic from './epic';
import createRootReducer from './reducer';
import dependencies from './dependencies';

import persistConfig from './persistConfig';

const epicMiddleware = createEpicMiddleware({
  dependencies,
});

export const configureStore = (): // preloadedState: object = {},
{ store: Store; persistor: Persistor } => {
  const persistedReducer = persistReducer(persistConfig, createRootReducer());
  // const middlewares = [multi, epicMiddleware];
  const middlewares = [epicMiddleware];

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
