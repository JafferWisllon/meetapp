import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { User, updateProfile } from './types';
import { SetProfile, UpdateProfile } from './actions';
import api from '../../../services/api';

type RequestUpdateProfileAction = ReturnType<typeof UpdateProfile>;

function* UpdateProfileSaga({ payload }: RequestUpdateProfileAction) {
  try {
    const response: AxiosResponse<User> = yield call(
      api.patch,
      `/users/${payload.userId}`,
      payload.request,
    );

    yield put(SetProfile(response.data));
    toast.success('Perfil atualizado com sucesso!');
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* DashboardSaga() {
  yield all([takeLatest(updateProfile, UpdateProfileSaga)]);
}
