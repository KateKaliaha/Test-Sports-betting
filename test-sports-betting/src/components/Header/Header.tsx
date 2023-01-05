import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton/IconButton';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'inherit', height: '10vh' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <SportsBasketballIcon />
          </IconButton>
          <Typography variant="h4" color="inherit" component="div">
            Ставки на спорт
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
