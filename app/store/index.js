import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootLogic from 'app/store/RootLogics';

import rootReducers from 'app/store/reducers'; // where reducers is a object of reducers
import { splitUp2 } from 'app/utils/helper';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';

// const config = {
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: ['modalReducer', 'authReducer'],
//   debug: true, //to get useful logging
// };

const INITIAL_STATE = {};
const deps = {
  SECRET_KEY: 'rey',
};

const chunks = splitUp2(rootLogic, 50); // no error
const middlewares = chunks.map(chunk => createLogicMiddleware(chunk, deps));
const middleware = applyMiddleware(...middlewares);

export default () => {
  const store = createStore(
    rootReducers,
    INITIAL_STATE,
    composeWithDevTools(middleware),
  );
  const persistor = persistStore(store);
  // NOTE : careful with the purge
  // never goes into production env
  // if (__DEV__ && true) persist.purge();
  // if (module.hot) {
  //   module.hot.accept(() => {
  //     // This fetch the new state of the above reducers.
  //     store.replaceReducer(persistReducer(null, rootReducer));
  //   });
  // }

  return { store, persistor };
};

// const reducers = persistCombineReducers(config, rootReducers);
// const persistConfig = {};
// const store = createStore(reducers, undefined, composeWithDevTools(middleware));

// const persistor = persistStore(store, persistConfig, () => {});
// const configureStore = () => {
//   return { persistor, store };
// };

// export default configureStore;
