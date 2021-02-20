import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import dashboard from './dashboard/sagas';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  return yield all([auth(), dashboard()]);
}
