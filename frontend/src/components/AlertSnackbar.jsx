import React from 'react';
import { Snackbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { hideSnackbar } from '../store/actions';

const AlertSnackbar = () => {
  const { open, message } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={open}
      message={message}
      autoHideDuration={6000}
      onClose={handleClose}
    />
  );
};

export default AlertSnackbar;
