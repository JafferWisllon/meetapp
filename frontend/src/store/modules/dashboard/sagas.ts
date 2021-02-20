import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { MeetupsRequest, Meetup } from './types';
import { listAll } from '../../../services/meetups';
import { RequestLoading, getMeetupsSuccess } from './action';

function* RequestMeetupsSaga() {
  yield put(RequestLoading());
  const response: AxiosResponse<Meetup[]> = yield call(listAll);
  yield put(getMeetupsSuccess(response.data));
  yield put(RequestLoading());
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* DashboardSaga() {
  yield all([takeLatest(MeetupsRequest, RequestMeetupsSaga)]);
}
