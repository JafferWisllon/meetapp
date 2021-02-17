import { Reducer } from 'redux';
import { loginSuccess, AuthState, loginLoading } from './types';

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
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default reducer;
