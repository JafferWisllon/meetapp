import {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginLoading,
} from './types';

interface Request {
  email: string;
  password: string;
}

interface Success {
  token: string;
  user: any;
}

interface LoginAction {
  type: string;
  payload: Request | Success;
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

export function SuccessLogin(payload: Success): LoginAction {
  return {
    type: loginSuccess,
    payload,
  };
}

export function FailureLogin(): { type: string } {
  return {
    type: loginFailure,
  };
}
