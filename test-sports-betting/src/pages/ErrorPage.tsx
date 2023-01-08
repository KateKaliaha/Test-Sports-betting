import { Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <Container className="main">
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Страница не найдена. Вернитесь на <Link to={'/'}>главную </Link> страницу.
      </Typography>
    </Container>
  );
};
