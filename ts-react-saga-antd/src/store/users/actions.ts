import { IUser } from 'src/models/User'
import { TypeKeys } from './constants';
import * as types from './types';

export type UsersAction = 
  | types.IGetUsersRequest
  | types.IGetUsersSuccess
  | types.IGetUsersFailure

export const getUsersRequest = (): types.IGetUsersRequest => ({
  type: TypeKeys.GET_USERS_REQUEST,
});

export const getUsersSuccess = (users: IUser[]): types.IGetUsersSuccess => ({
  type: TypeKeys.GET_USERS_SUCCESS,
  users,
});

export const getUsersFailure = (error: any): types.IGetUsersFailure => ({
  type: TypeKeys.GET_USERS_FAILURE,
  error,
});