import { call, put, takeEvery } from 'redux-saga/effects'

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
    yield takeEvery(TypeKeys.GET_USERS_REQUEST, fetchUsers)
}
