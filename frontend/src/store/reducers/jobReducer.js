import { SCHEDULE_JOB } from '../actions';

const initialState = {
  jobs: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCHEDULE_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    default:
      return state;
  }
};

export default jobReducer;
