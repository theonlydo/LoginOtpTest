import {applyMiddleware, legacy_createStore as createStore} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {reducer} from '../reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  // composeWithDevTools(applyMiddleware(thunk, logger)),
  applyMiddleware(thunk, logger),
);

export const persistor = persistStore(store);
