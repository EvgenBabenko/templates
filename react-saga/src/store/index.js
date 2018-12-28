import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

const enchancer = process.env.NODE_ENV === 'production'
  ? applyMiddleware(...middlewares)
  : composeWithDevTools(applyMiddleware(...middlewares));

const configureStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
    enchancer,
  )

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();
