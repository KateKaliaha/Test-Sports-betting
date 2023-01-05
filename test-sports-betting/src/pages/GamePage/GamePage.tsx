import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { games } from 'utils/games';
import { IGames } from 'utils/interfaces';

export const GamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  function goBack() {
    return navigate(-1);
  }

  const checkedGame = games.find((game) => game.id === +id!) as IGames;

  useEffect(() => {
    if (!checkedGame) {
      navigate('/404');
    }
  });

  return (
    checkedGame && (
      <Container className="main">
        <h1>
          {checkedGame.player1} {checkedGame.player2}
        </h1>
      </Container>
    )
  );
};
