import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" mt={4} p={2} bgcolor="primary.main">
    <Typography variant="body1" color="inherit">
      My Awesome Project © {new Date().getFullYear()}
    </Typography>
  </Box>
);

export default Footer;
