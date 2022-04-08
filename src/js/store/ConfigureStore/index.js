import {createStore, applyMiddleware, compose} from 'redux';

import thunkMiddleWare from 'redux-thunk';

import loggerMiddleWare from 'redux-logger';

import isDev from 'isdev';

import RootReducer from '../../reducers';

let configureStore;

// If the app is running in dev environment, add in redux-devtools.
if (isDev) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  configureStore = initialState => {
    const store = createStore(
      RootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(
          thunkMiddleWare,
          loggerMiddleWare
        )
      )
    );

    return store;
  };
} else {
  configureStore = initialState => {
    const store = createStore(
      RootReducer,
      initialState,
      applyMiddleware(thunkMiddleWare)
    );

    return store;
  }
}

export default configureStore;