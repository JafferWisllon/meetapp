import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { AuthState } from './modules/auth/types';
import { DashboardState } from './modules/dashboard/types';

export interface State {
  auth: AuthState;
  dashboard: DashboardState;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
