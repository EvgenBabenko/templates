import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

const configureStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(...middlewares),
  )

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
