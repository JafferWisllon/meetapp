import api from '../services/api';

api.interceptors.request.use(
  async config => {
    if (!config.url?.endsWith('login')) {
      const token = localStorage.getItem('@meetapp-token');
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    // I cand handle a request with errors here
    return Promise.reject(error);
  },
);
