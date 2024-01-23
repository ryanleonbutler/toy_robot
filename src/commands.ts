import { Position } from './interfaces';
import { parsePositionInput } from './utils';

export const placeRobot = (inputPosition: string): string[][] => {
  const board: string[][] = [
    ['0', '1', '2', '3', '4'],
    ['0', '1', '2', '3', '4'],
    ['0', '1', '2', '3', '4'],
    ['0', '1', '2', '3', '4'],
    ['0', '1', '2', '3', '4'],
  ];
  const position: Position = parsePositionInput(inputPosition);

  if (position.row && position.column && position.direction) {
    for (const row of board) {
      if (board.indexOf(row) !== Number(position.row)) {
        continue;
      }
      for (const col of row) {
        if (row.indexOf(col) !== Number(position.column)) {
          continue;
        } else {
          row[row.indexOf(col)] = position.direction;
        }
      }
    }
  }

  return board.reverse();
};
