import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Persistor as PersistorType } from 'redux-persist/es/types';

import { configureStore } from './redux/store';
import './index.css';
// import App from './App';
import RootNavigator from './navigators/root/RootNavigator';
import * as serviceWorker from './serviceWorker';

const { persistor, store } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={(persistor as unknown) as PersistorType}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
