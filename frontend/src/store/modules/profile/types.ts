export const setLoading = 'SET_LOADING';
export const setProfile = 'SET_PROFILE';
export const updateProfile = 'SET_PROFILE';

export interface User {
  id: string;
  name: string;
  password: string;
}

export interface ProfileState {
  loading: boolean;
  user: User | null;
}
