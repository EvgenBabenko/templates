import { UsersAction } from './actions';
import { TypeKeys } from './constants';
import { IUsersState } from 'src/models/IUserState';

const initialState: IUsersState = {
  error: '',
  isFetching: false,
  users: [],
}

export default (state = initialState, action: UsersAction): IUsersState => {
  switch (action.type) {
    case TypeKeys.GET_USERS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case TypeKeys.GET_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.users
      };
    case TypeKeys.GET_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};