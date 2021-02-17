import api from '../api';

interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

interface SignInRequest {
  email: string;
  password: string;
}

interface LoginSuccess {
  token: string;
}

export const signUp = (request: SignUpRequest): Promise<any> => {
  return api.post('/users', request);
};

export const signIn = (request: SignInRequest): Promise<LoginSuccess> => {
  return api.post('/auth/login', request);
};
