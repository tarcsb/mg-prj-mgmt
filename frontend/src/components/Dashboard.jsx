import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6">Response Rate</Typography>
            {/* Add your content here */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6">Number of Clients</Typography>
            {/* Add your content here */}
          </Paper>
        </Grid>
        {/* Add more dashboard items as needed */}
      </Grid>
    </Container>
  );
};

export default Dashboard;
