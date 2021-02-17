export const loginLoading = 'LOGIN_LOADING';
export const loginRequest = 'LOGIN_REQUEST';
export const loginSuccess = 'LOGIN_SUCCESS';
export const loginFailure = 'LOGIN_FAILURE';

export interface AuthState {
  loading: boolean;
  token: string | null;
}
