export const setLoading = 'SET_LOADING';
export const setProfile = 'SET_PROFILE';
export const updateProfile = 'UPDATE_PROFILE';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ProfileState {
  loading: boolean;
  user: User | null;
}
