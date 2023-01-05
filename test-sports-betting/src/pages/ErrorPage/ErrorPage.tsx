import { Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <Container className="main">
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">
        Страница не найдена. Вернитесь на <Link to={'/'}>главную </Link> страницу.
      </Typography>
    </Container>
  );
};
