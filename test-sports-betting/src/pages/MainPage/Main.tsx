import { Container, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { MessageBar, messageStr } from 'components/message/Message';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IGames } from 'utils/interfaces';
import { games, gamesBetting } from '../../utils/games';

export const Main = () => {
  const navigate = useNavigate();
  const openGamePage = (id: number) => {
    navigate(`game/${id}`);
  };
  const [message, setMessage] = useState(messageStr.open);
  function changeVisibilityMessage(data: boolean) {
    setMessage(data);
  }

  const bettingGames = Object.keys(gamesBetting);

  return (
    <Container className="main">
      <MessageBar onOpen={changeVisibilityMessage} message={message} />
      <Typography variant="h3">Список игр</Typography>
      <List>
        {games.map((game: IGames) => (
          <ListItem disablePadding key={game.id}>
            <ListItemButton
              disabled={bettingGames.includes(game.id + '') ? true : false}
              className="games-list"
              onClick={() => openGamePage(game.id)}
              sx={{ padding: '6px', width: '50%' }}
            >
              <div>
                {game.id}. {game.data}/{game.time} {game.player1} : {game.player2}
              </div>
            </ListItemButton>
            <ListItemText>
              {bettingGames.includes(game.id + '')
                ? `Ваша ставка ${gamesBetting[game.id + '']}`
                : null}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
