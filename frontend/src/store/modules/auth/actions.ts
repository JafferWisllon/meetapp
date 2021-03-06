import {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginLoading,
  signOut,
  signUpRequest,
} from './types';

interface Request {
  email: string;
  password: string;
}

interface LoginAction {
  type: string;
  payload: Request | string;
}

interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

interface SignupAction {
  type: string;
  payload: SignUpRequest;
}

export function RequestLoading(): { type: string } {
  return {
    type: loginLoading,
  };
}

export function RequestLogin(payload: Request): LoginAction {
  return {
    type: loginRequest,
    payload,
  };
}

export function SuccessLogin(payload: string): LoginAction {
  return {
    type: loginSuccess,
    payload,
  };
}

export function RequestSignUp(payload: SignUpRequest): SignupAction {
  return {
    type: signUpRequest,
    payload,
  };
}

export function FailureLogin(): { type: string } {
  return {
    type: loginFailure,
  };
}

export function LogoutOut(): { type: string } {
  return {
    type: signOut,
  };
}
