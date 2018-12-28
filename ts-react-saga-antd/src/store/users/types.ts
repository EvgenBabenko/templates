import { TypeKeys } from './constants';
import { IUser } from 'src/models/User';

export interface IGetUsersRequest {
  type: TypeKeys.GET_USERS_REQUEST;
}

export interface IGetUsersSuccess {
  type: TypeKeys.GET_USERS_SUCCESS;
  users: IUser[];
}

export interface IGetUsersFailure {
  type: TypeKeys.GET_USERS_FAILURE;
  error: any;
}
