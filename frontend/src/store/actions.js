export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR';
export const SCHEDULE_JOB = 'SCHEDULE_JOB';

export const showSnackbar = (message) => {
  console.log("Showing snackbar with message:", message);
  return {
    type: SHOW_SNACKBAR,
    payload: message,
  };
};

export const hideSnackbar = () => {
  console.log("Hiding snackbar");
  return {
    type: HIDE_SNACKBAR,
  };
};

export const scheduleJob = (job) => {
  console.log("Scheduling job:", job);
  return {
    type: SCHEDULE_JOB,
    payload: job,
  };
};
