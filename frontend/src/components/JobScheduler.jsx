import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { scheduleJob } from '../store/actions';

const JobScheduler = () => {
  const [description, setDescription] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(scheduleJob({ description, scheduleTime }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Job Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Schedule Time"
          type="datetime-local"
          fullWidth
          value={scheduleTime}
          onChange={(e) => setScheduleTime(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Schedule Job
        </Button>
      </Grid>
    </Grid>
  );
};

export default JobScheduler;
