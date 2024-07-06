import { combineReducers } from 'redux';
import notificationReducer from './slices/notificationSlice';
import jobReducer from './slices/jobSlice';

const rootReducer = combineReducers({
    notification: notificationReducer,
    jobs: jobReducer,
});

export default rootReducer;
