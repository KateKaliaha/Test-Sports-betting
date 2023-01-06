export interface IGames {
  readonly id: number;
  data: string;
  time: string;
  player1: string;
  player2: string;
}

export interface IGamesBetting {
  [key: string]: string;
}

export interface IMessageBar {
  onOpen: (data: boolean) => void;
  message: boolean;
}
