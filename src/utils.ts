import { Position } from './interfaces';

export const parsePositionInput = (postionInput: string): Position => {
  let position: Position = { row: '', column: '', direction: '' };
  try {
    const inputItems = postionInput.split(',');
    if (inputItems.length !== 3) {
      throw Error;
    }
    position = { row: inputItems[0], column: inputItems[1], direction: inputItems[2] };
  } catch (error) {
    console.warn('warn: Please try entering the position again using the correct format e.g. "0,0,NORTH"');
  }
  return position;
};

export const printBoard = (board: string[][]) => {
  console.log(board);
};
