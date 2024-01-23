export enum Direction {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

export interface Position {
  row: string;
  column: string;
  direction: string;
}
