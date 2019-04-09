
import createRequestActionNames from 'utils/createRequestActionNames';

export const types = {
  ...createRequestActionNames('GET_USERS'),
  // GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  // GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  // GET_USERS_FAILURE: 'GET_USERS_FAILURE',
};

const initialState = {
  isFetching: false,
  users: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.users,
      };

    case types.GET_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export const actions = {
  getUsersRequest: value => ({ type: types.GET_USERS_REQUEST, value }),
  getUsersSuccess: users => ({ type: types.GET_USERS_SUCCESS, users }),
  getUsersFailure: error => ({ type: types.GET_USERS_FAILURE, error }),
};
