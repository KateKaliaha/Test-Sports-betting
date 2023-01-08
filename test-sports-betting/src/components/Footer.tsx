import GitHubIcon from '@mui/icons-material/GitHub';
import { Container, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

export const Footer = () => {
  return (
    <Container
      component="footer"
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" color="white" fontWeight="700" sx={{ mt: { xs: 3, sm: 0 } }}>
        2023
      </Typography>
      <Stack flexDirection="row" p={{ xs: '1px 0', md: '4px 0' }}>
        <IconButton
          color="inherit"
          href="https://github.com/KateKaliaha"
          target="_blank"
          sx={{ fontSize: 14, p: { xs: 0.5, md: 1 } }}
        >
          <GitHubIcon sx={{ mr: 0.5 }} />
          Katherina
        </IconButton>
      </Stack>
    </Container>
  );
};
