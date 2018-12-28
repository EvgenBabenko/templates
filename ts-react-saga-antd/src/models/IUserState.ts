import { IUser } from './User';

export interface IUsersState {
  error: string;
  isFetching: boolean;
  users: IUser[];
}