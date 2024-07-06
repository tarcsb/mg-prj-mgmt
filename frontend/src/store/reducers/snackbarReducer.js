import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../actions';

const initialState = {
  open: false,
  message: '',
};

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        open: true,
        message: action.payload,
      };
    case HIDE_SNACKBAR:
      return {
        open: false,
        message: '',
      };
    default:
      return state;
  }
};

export default snackbarReducer;
