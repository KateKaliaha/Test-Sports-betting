import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { IMessageBar } from 'utils/interfaces';

export const messageStr = {
  open: false,
  match: '',
  bet: '',
};

export const MessageBar = (props: IMessageBar) => {
  const open = props.message;

  function handleClose(event: React.SyntheticEvent | Event, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    props.onOpen(false);
  }
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%', color: 'black' }}>
        Спасибо, ваша ставка на матч {messageStr.match} на {messageStr.bet} принята
      </Alert>
    </Snackbar>
  );
};
