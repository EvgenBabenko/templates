import { TypeKeys } from './constants';

export const getUsersRequest = () => ({
  type: TypeKeys.GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
  type: TypeKeys.GET_USERS_SUCCESS,
  users,
});

export const getUsersFailure = (error) => ({
  type: TypeKeys.GET_USERS_FAILURE,
  error,
});