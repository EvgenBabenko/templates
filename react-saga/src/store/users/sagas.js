import { call, put, takeEvery, take } from 'redux-saga/effects'

import * as actions from './actions';
import { TypeKeys } from './constants'

function* fetchUsers() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const users = yield call([response, response.json])

    yield put(actions.getUsersSuccess(users));
  } catch (err) {
    yield put(actions.getUsersFailure(err));
  }
}

export default function* usersSaga() {
  // const {user} = yield take('LOGIN_REQUEST')
  // console.log(r)
  while (true) {
    // const r = yield takeEvery(TypeKeys.GET_USERS_REQUEST, fetchUsers)
    const { value } = yield take(TypeKeys.GET_USERS_REQUEST)
    console.log(value)
    yield call(fetchUsers)
    // const token = yield call(authorize, user, password)
    // if (token) {
    //   yield call(Api.storeItem, {token})
    //   yield take('LOGOUT')
    //   yield call(Api.clearItem, 'token')
    // }
  }
}
