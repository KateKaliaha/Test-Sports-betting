import { Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { games, gamesBetting } from 'utils/games';
import { IGames } from 'utils/interfaces';
import { styled } from '@mui/material/styles';

import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { messageStr } from 'components/message/Message';

const BisqueRadio = styled(Radio)<RadioProps>(() => ({
  '&, &.Mui-checked': {
    color: 'bisque',
  },
}));

export const YellowButton = styled(Button)(() => ({
  backgroundColor: 'bisque',
  fontSize: '14px',
  color: 'grey',
  fontWeight: 700,
  ':hover': {
    backgroundColor: 'rgb(231, 189, 137)',
    cursor: 'pointer',
  },
  ':disabled': {
    backgroundColor: 'rgb(223, 228, 233)',
  },
})) as typeof Button;

function getRandomArbitrary(min: number, max: number) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

const randomNumbers = () => {
  const arrCoefficients: string[] = [];
  for (let i = 0; i < 3; i++) {
    arrCoefficients.push(getRandomArbitrary(1, 10));
  }
  return arrCoefficients;
};

const transformCheckedValue = (value: string, arr: IGames) => {
  let res = '';
  switch (value) {
    case 'П1': {
      res = 'победу ' + arr.player1;
      break;
    }
    case 'П2': {
      res = 'победу ' + arr.player2;
      break;
    }
    case 'Х': {
      res = 'ничью';
      break;
    }
  }
  return res;
};

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
    gamesBetting[checkedGame.id] = transformCheckedValue(checked, checkedGame);
    goBack();
    messageStr.open = true;
    messageStr.match = `${checkedGame.player1} vs ${checkedGame.player2} `;
    messageStr.bet = gamesBetting[checkedGame.id];
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
          {checkedGame.player1} vs {checkedGame.player2}
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
            />
            <FormControlLabel
              labelPlacement="bottom"
              value="Х"
              control={<BisqueRadio onClick={(event) => changeDisabledBtn(event)} />}
              label={coefficients[0] === undefined ? '' : 'Х - ' + coefficients[1]}
            />
            <FormControlLabel
              labelPlacement="bottom"
              value="П2"
              control={<BisqueRadio onClick={(event) => changeDisabledBtn(event)} />}
              label={coefficients[0] === undefined ? '' : 'П2 - ' + coefficients[2]}
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
