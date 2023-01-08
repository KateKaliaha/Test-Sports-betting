import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { MessageBar, messageStr } from 'components/Message';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IGames } from 'utils/interfaces';
import { games, gamesBetting } from '../utils/games';

export const Main = () => {
  const navigate = useNavigate();
  const openGamePage = (id: number) => {
    navigate(`game/${id}`);
  };
  const [message, setMessage] = useState(messageStr.open);
  function changeVisibilityMessage(data: boolean) {
    setMessage(data);
  }

  const bettingGamesID = Object.keys(gamesBetting);

  return (
    <Container className="main">
      <MessageBar onOpen={changeVisibilityMessage} message={message} />
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3" sx={{ width: '75vw' }}>
          Список игр
        </Typography>
        <Typography variant="h4" sx={{ width: '20vw', textAlign: 'center' }}>
          Ставка
        </Typography>
      </Box>
      <List>
        {games.map((game: IGames) => (
          <ListItem
            disablePadding
            key={game.id}
            className="list"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <ListItemButton
              disabled={bettingGamesID.includes(game.id + '') ? true : false}
              className="games-list"
              onClick={() => openGamePage(game.id)}
              sx={{
                padding: '6px',
                width: '75vw',
              }}
            >
              <Box className="game-info">
                <div className="game-time">
                  {game.data}/{game.time}
                </div>
                <Avatar
                  alt={game.player1.name}
                  sx={{ width: 30, height: 30 }}
                  src={game.player1.label}
                />
                <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
                  {game.player1.name}
                </Box>
                <div>:</div>
                <Avatar
                  alt={game.player2.name}
                  sx={{ width: 30, height: 30 }}
                  src={game.player2.label}
                />
                <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
                  {game.player2.name}
                </Box>
              </Box>
            </ListItemButton>
            <ListItemText sx={{ padding: '6px', width: '20vw' }}>
              {bettingGamesID.includes(game.id + '') ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {gamesBetting[game.id].label ? (
                    <Avatar
                      alt={game.player2.name}
                      sx={{ width: 30, height: 30 }}
                      src={gamesBetting[game.id].label}
                    ></Avatar>
                  ) : (
                    <div>Ничья</div>
                  )}
                </div>
              ) : null}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
