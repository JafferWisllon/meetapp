import { Reducer } from 'redux';
import { DashboardState, SetLoading, MeetupsSucess } from './types';

const INITIAL_STATE: DashboardState = {
  loading: false,
  data: [],
};

const reducer: Reducer<DashboardState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SetLoading:
      return {
        ...state,
        loading: !state.loading,
      };
    case MeetupsSucess:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
