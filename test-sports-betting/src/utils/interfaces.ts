export interface IGames {
  readonly id: number;
  data: string;
  time: string;
  player1: {
    name: string;
    label: string;
  };
  player2: {
    name: string;
    label: string;
  };
}

export interface IGamesBetting {
  [key: string]: Record<string, string>;
}

export interface IMessageBar {
  onOpen: (data: boolean) => void;
  message: boolean;
}

export interface IResultBet {
  winner?: string;
  label?: string;
}
