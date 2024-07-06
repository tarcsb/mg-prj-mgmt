import React from 'react';
import { Container, Grid } from '@mui/material';
import UpdateView from './UpdateView';
import ParseView from './ParseView';
import TaskManagement from './TaskManagement';
import Search from './Search';
import CustomStepper from '../components/CustomStepper';
import AlertSnackbar from '../components/AlertSnackbar';
import JobScheduler from '../components/JobScheduler';

const HomePage = () => (
  <Container>
    <AlertSnackbar />
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <UpdateView />
      </Grid>
      <Grid item xs={12} md={6}>
        <ParseView />
      </Grid>
      <Grid item xs={12} md={6}>
        <TaskManagement />
      </Grid>
      <Grid item xs={12} md={6}>
        <Search />
      </Grid>
    </Grid>
    <CustomStepper onComplete={() => console.log('Stepper Complete!')} />
    <JobScheduler />
  </Container>
);

export default HomePage;
