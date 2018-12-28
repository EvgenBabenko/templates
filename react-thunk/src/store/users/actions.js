import { TypeKeys } from './constants';

const getUsersRequest = () => ({
  type: TypeKeys.GET_USERS_REQUEST,
});

const getUsersSuccess = (users) => ({
  type: TypeKeys.GET_USERS_SUCCESS,
  users,
});

const getUsersFailure = (error) => ({
  type: TypeKeys.GET_USERS_FAILURE,
  error,
});

export const getUsers = () => async (dispatch) => {
  dispatch(getUsersRequest());

  try {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users')

    const users = await responce.json()

    dispatch(getUsersSuccess(users));
  } catch (error) {
    dispatch(getUsersFailure(error));
  }
};