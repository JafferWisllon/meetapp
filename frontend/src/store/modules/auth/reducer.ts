import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  loginSuccess,
  AuthState,
  loginLoading,
  loginFailure,
  signOut,
} from './types';

const config = {
  storage,
  key: '@meetup-auth',
  whitelist: ['token'],
};

const INITIAL_STATE: AuthState = {
  loading: false,
  token: null,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginLoading: {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    case loginSuccess:
      return {
        ...state,
        token: action.payload,
      };
    case signOut:
      return {
        ...state,
        token: null,
      };
    case loginFailure:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default persistReducer(config, reducer);
