/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
// import { routerMiddleware } from 'connected-react-router';

import history from 'helpers/history';
import rootReducer from './modules';
import rootSaga from './sagas';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
    // routerMiddleware(history),
  ];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const enchancer = process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(
    rootReducer(history),
    initialState,
    enchancer,
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
