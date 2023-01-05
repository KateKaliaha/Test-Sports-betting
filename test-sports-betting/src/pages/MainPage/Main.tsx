import { Container, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IGames } from 'utils/interfaces';
import { games } from '../../utils/games';

export const Main = () => {
  const navigate = useNavigate();
  const openGamePage = (id: number) => {
    navigate(`game/${id}`);
  };

  return (
    <Container className="main">
      <Typography variant="h3">Список игр</Typography>
      <List>
        {games.map((game: IGames) => (
          <ListItem disablePadding key={game.id}>
            <ListItemButton
              className="games-list"
              onClick={() => openGamePage(game.id)}
              sx={{ padding: '6px', width: '50%' }}
            >
              <div>
                {game.id}. {game.data}/{game.time} {game.player1} : {game.player2}
              </div>
            </ListItemButton>
            <ListItemText></ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
