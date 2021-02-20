import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { loginRequest, signOut } from './types';
import api from '../../../services/api';

import {
  RequestLogin,
  SuccessLogin,
  RequestLoading,
  FailureLogin,
} from './actions';

type RequestLoginAction = ReturnType<typeof RequestLogin>;

interface ResponseLogin {
  token: string;
  user: any;
}

function* RequestLoginSaga({ payload }: RequestLoginAction) {
  try {
    yield put(RequestLoading());
    const { data }: AxiosResponse<ResponseLogin> = yield call(
      api.post,
      `/auth/login`,
      payload,
    );

    yield put(SuccessLogin(data));
    toast.success('Login efetuado com sucesso');
    localStorage.setItem('@meetapp-token', data.token);
    yield put(RequestLoading());
  } catch (error) {
    toast.error('Não foi possivel logar, tente novamente');
    yield put(FailureLogin());
  }
}

function RequestSignOut() {
  localStorage.removeItem('@meetapp-token');
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* authSaga() {
  yield all([
    takeLatest(loginRequest, RequestLoginSaga),
    takeLatest(signOut, RequestSignOut),
  ]);
}
