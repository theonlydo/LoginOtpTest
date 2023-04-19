/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import {persistor, store} from '@app/data';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Application from './App';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Application />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
