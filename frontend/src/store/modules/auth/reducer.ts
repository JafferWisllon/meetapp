import { Reducer } from 'redux';
import { loginSuccess, AuthState, loginLoading } from './types';

const INITIAL_STATE: AuthState = {
  loading: false,
  token: null,
  user: null,
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
      console.log(action.payload);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default reducer;
