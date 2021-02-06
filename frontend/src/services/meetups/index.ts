import api from '../api';

export const listAll = (): Promise<any> => {
  return api.get('/meetups');
};
