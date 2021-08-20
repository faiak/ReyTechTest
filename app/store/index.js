import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootLogic from 'app/store/RootLogics';

import rootReducers from 'app/store/reducers'; // where reducers is a object of reducers
import { splitUp2 } from 'app/utils/helper';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer'],
  debug: true, //to get useful logging
};

const deps = {
  SECRET_KEY: 'rey',
};

const chunks = splitUp2(rootLogic, 50); // no error
const middlewares = chunks.map(chunk => createLogicMiddleware(chunk, deps));
const middleware = applyMiddleware(...middlewares);

const reducers = persistCombineReducers(config, rootReducers);
const persistConfig = {};
const store = createStore(reducers, undefined, composeWithDevTools(middleware));

const persistor = persistStore(store, persistConfig, () => {});
const configureStore = () => {
  return { persistor, store };
};

export default configureStore;
