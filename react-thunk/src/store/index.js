import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer'

const middlewares = [
  thunk,
];

const enchancer =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

const configureStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
    enchancer
  )

  return store
}

export default configureStore();