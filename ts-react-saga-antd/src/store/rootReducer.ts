import { combineReducers } from 'redux';

import users from './users/reducers'
import IAppState from 'src/models/IAppState';

export default combineReducers<IAppState>({
  users,
})