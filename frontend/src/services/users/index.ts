import api from '../api';

interface Request {
  name: string;
  email: string;
  password: string;
}

export const signUp = (request: Request): Promise<any> => {
  return api.post('/users', request);
};
