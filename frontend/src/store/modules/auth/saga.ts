import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { loginRequest } from './types';
import api from '../../../services/api';
import { RequestLogin, SuccessLogin, RequestLoading } from './actions';

type RequestLoginAction = ReturnType<typeof RequestLogin>;

interface ResponseLogin {
  token: string;
  user: any;
}

function* RequestLoginSaga({ payload }: RequestLoginAction) {
  yield put(RequestLoading());
  const { data }: AxiosResponse<ResponseLogin> = yield call(
    api.post,
    `/auth/login`,
    payload,
  );

  yield put(SuccessLogin(data));
  localStorage.setItem('@meetapp-token', data.token);
  yield put(RequestLoading());
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* authSaga() {
  yield all([takeLatest(loginRequest, RequestLoginSaga)]);
}
