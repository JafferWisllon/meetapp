import { setProfile, User, updateProfile } from './types';

interface SetProfileAction {
  type: string;
  payload: User;
}

interface UpdateRequest {
  userId?: string;
  request: {
    name?: string;
    email?: string;
    oldPassword?: string;
    password?: string;
    passwordConfirmation?: string;
  };
}
interface UpdateProfileAction {
  type: string;
  payload: UpdateRequest;
}

export const SetProfile = (payload: User): SetProfileAction => {
  return {
    type: setProfile,
    payload,
  };
};

export const UpdateProfile = (payload: UpdateRequest): UpdateProfileAction => {
  return {
    type: updateProfile,
    payload,
  };
};
