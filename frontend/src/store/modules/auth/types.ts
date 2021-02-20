export const loginLoading = 'LOGIN_LOADING';
export const loginRequest = 'LOGIN_REQUEST';
export const signUpRequest = 'SIGNUP_REQUEST';
export const loginSuccess = 'LOGIN_SUCCESS';
export const loginFailure = 'LOGIN_FAILURE';
export const signOut = 'SIGN_OUT';

export interface AuthState {
  loading: boolean;
  token: string | null;
}
