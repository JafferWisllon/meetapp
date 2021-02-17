import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { loginRequest } from './types';
import api from '../../../services/api';
import { RequestLogin, SuccessLogin, RequestLoading } from './actions';

type RequestLoginAction = ReturnType<typeof RequestLogin>;

interface ResponseLogin {
  token: string;
}

function* RequestLoginSaga({ payload }: RequestLoginAction) {
  yield put(RequestLoading());
  const {
    data: { token },
  }: AxiosResponse<ResponseLogin> = yield call(
    api.post,
    `/auth/login`,
    payload,
  );
  yield put(SuccessLogin({ token }));
  yield put(RequestLoading());
}

export default all([takeLatest(loginRequest, RequestLoginSaga)]);
