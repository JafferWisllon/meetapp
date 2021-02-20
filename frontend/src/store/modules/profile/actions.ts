import { setProfile, User } from './types';

interface SetProfileAction {
  type: string;
  payload: User;
}

export const SetProfile = (payload: User): SetProfileAction => {
  return {
    type: setProfile,
    payload,
  };
};
