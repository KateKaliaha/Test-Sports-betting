import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { games, gamesBetting } from 'utils/games';
import { IGames } from 'utils/interfaces';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { messageStr } from 'components/Message';
import { randomNumbers, transformCheckedValue } from 'utils/helpers';
import { BisqueRadio } from 'components/RadioButton';
import { YellowButton } from 'components/Button';

export const GamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [coefficients, setCoefficients] = useState<string[]>([]);
  const [checked, setChecked] = useState('');

  function goBack() {
    return navigate('/');
  }

  const changeDisabledBtn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disable) {
      setDisable(false);
    }
    setChecked((event.target as HTMLInputElement).value);
  };

  const checkedGame = games.find((game) => game.id === +id!) as IGames;

  const onSubmit = () => {
    gamesBetting[checkedGame.id] = { ...transformCheckedValue(checked, checkedGame) };
    goBack();
    messageStr.open = true;
    messageStr.match = `${checkedGame.player1.name} vs ${checkedGame.player2.name} `;
    messageStr.bet = gamesBetting[checkedGame.id].winner;
  };

  useEffect(() => {
    if (!checkedGame) {
      navigate('/404');
    }
  });

  useEffect(() => {
    setCoefficients(randomNumbers());
  }, []);

  return (
    checkedGame && (
      <Container
        className="main"
        sx={{
          p: '20px',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5">{checkedGame.data}.2023</Typography>
        <Typography variant="h5">{checkedGame.time}</Typography>
        <Typography variant="h2" sx={{ mt: 10 }}>
          {checkedGame.player1.name} vs {checkedGame.player2.name}
        </Typography>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ mt: 10 }}
          >
            <FormControlLabel
              className="a"
              value="П1"
              labelPlacement="bottom"
              control={<BisqueRadio onClick={(event) => changeDisabledBtn(event)} />}
              label={coefficients[0] === undefined ? '' : 'П1 - ' + coefficients[0]}
              sx={{ ml: { xs: 0 } }}
            />
            <FormControlLabel
              labelPlacement="bottom"
              value="Х"
              control={<BisqueRadio onClick={(event) => changeDisabledBtn(event)} />}
              label={coefficients[0] === undefined ? '' : 'Х - ' + coefficients[1]}
              sx={{ ml: { xs: 0 } }}
            />
            <FormControlLabel
              labelPlacement="bottom"
              value="П2"
              control={<BisqueRadio onClick={(event) => changeDisabledBtn(event)} />}
              label={coefficients[0] === undefined ? '' : 'П2 - ' + coefficients[2]}
              sx={{ ml: { xs: 0 } }}
            />
          </RadioGroup>
        </FormControl>
        <YellowButton
          variant="contained"
          disabled={disable}
          sx={{ mt: 8 }}
          size="large"
          onClick={onSubmit}
        >
          Сделать ставку
        </YellowButton>
      </Container>
    )
  );
};
