import {
  MeetupsRequest,
  SetLoading,
  GetMeetupsSuccess,
  Meetup,
  MeetupsSucess,
} from './types';

export const RequestLoading = (): { type: string } => ({
  type: SetLoading,
});

export const getMeetupsRequest = (): { type: string } => ({
  type: MeetupsRequest,
});

export const getMeetupsSuccess = (meetup: Meetup[]): GetMeetupsSuccess => ({
  type: MeetupsSucess,
  payload: meetup,
});
