import api from '../api';

export const listAll = (): Promise<any> => {
  return api.get('/meetups');
};

export const getOne = (meetupId: string): Promise<any> => {
  return api.get(`/meetups/${meetupId}`);
};

export const deleteMeetup = (meetupId: string): Promise<any> => {
  return api.delete(`/meetups/${meetupId}`);
};
