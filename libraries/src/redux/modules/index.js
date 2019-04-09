import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
// import { connectRouter } from 'connected-react-router';

import testModule from './testModule';

export default history => combineReducers({
  testModule,
  // router: connectRouter(history),
  form: formReducer
});
