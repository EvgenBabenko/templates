import {
  call,
  put,
  takeEvery,
  take,
} from 'redux-saga/effects';

import { actions, types } from '../modules/testModule';

function* fetchUsers() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const users = yield call([response, response.json]);

    yield put(actions.getUsersSuccess(users));
  } catch (err) {
    yield put(actions.getUsersFailure(err));
  }
}

export default function* usersSaga() {
  // yield takeEvery(types.GET_USERS_REQUEST, fetchUsers);

  while (true) {
    // const r = yield takeEvery(TypeKeys.GET_USERS_REQUEST, fetchUsers)
    const { value } = yield take(types.GET_USERS_REQUEST);

    console.log(value);

    yield call(fetchUsers);
  }
}
