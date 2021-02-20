import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ProfileState, setProfile } from './types';

const config = {
  storage,
  key: '@meetup-profile',
  whitelist: ['user'],
};

const INITIAL_STATE: ProfileState = {
  loading: false,
  user: null,
};

const reducer: Reducer<ProfileState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case setProfile:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default persistReducer(config, reducer);
