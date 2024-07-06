import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import snackbarReducer from './reducers/snackbarReducer';
import jobReducer from './reducers/jobReducer';

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  jobs: jobReducer,
  // Add other reducers here
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
