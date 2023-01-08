import { IGames, IResultBet } from './interfaces';

const data = new Date();
export const today = data.getDate();
const month = data.getMonth() + 1;
export const fullMonth = month.toString().length === 1 ? '0' + month : month;

const getRandomArbitrary = (min: number, max: number) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

export const randomNumbers = () => {
  const arrCoefficients: string[] = [];

  for (let i = 0; i < 3; i++) {
    arrCoefficients.push(getRandomArbitrary(1, 10));
  }

  return arrCoefficients;
};

export const transformCheckedValue = (value: string, arr: IGames) => {
  const res: IResultBet = {};

  switch (value) {
    case 'П1': {
      res.winner = arr.player1.name;
      res.label = arr.player1.label;
      break;
    }
    case 'П2': {
      res.winner = arr.player2.name;
      res.label = arr.player2.label;
      break;
    }
    case 'Х': {
      res.winner = 'Ничья';
      break;
    }
  }

  return res;
};
