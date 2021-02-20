export const SetLoading = 'SET_LOADING';
export const MeetupsRequest = 'GET_MEETUPS_REQUEST';
export const MeetupsSucess = 'GET_MEETUPS_SUCCESS';

export interface Meetup {
  id: string;
  title: string;
  description: string;
  locale: string;
  date: string;
  banner: File;
  user_id: string;
}

export interface DashboardState {
  loading: boolean;
  data: Meetup[];
}

export interface GetMeetupsSuccess {
  type: string;
  payload: Meetup[];
}
