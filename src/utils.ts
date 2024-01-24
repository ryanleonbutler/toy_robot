import { Direction, Position } from './interfaces';
import * as fs from 'fs';

const tablePath = './table.json';

export const createNewTable = (): string[][] => {
  return [
    ['0', '1', '2', '3', '4'],
    ['0', '1', '2', '3', '4'],
    ['0', '1', '2', '3', '4'],
    ['0', '1', '2', '3', '4'],
    ['0', '1', '2', '3', '4'],
  ];
};

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

export const getPosition = (table: string[][]): Position => {
  const position: Position = { row: '', column: '', direction: '' };
  try {
    for (const row of table) {
      const indexRow = table.indexOf(row);
      for (const col of row) {
        const indexCol = row.indexOf(col);
        switch (col) {
          case Direction.NORTH:
            position.row = String(indexRow);
            position.column = String(indexCol);
            position.direction = Direction.NORTH;
            break;
          case Direction.SOUTH:
            position.row = String(indexRow);
            position.column = String(indexCol);
            position.direction = Direction.SOUTH;
            break;
          case Direction.EAST:
            position.column = String(indexCol);
            position.row = String(indexRow);
            position.direction = Direction.EAST;
            break;
          case Direction.WEST:
            position.column = String(indexCol);
            position.row = String(indexRow);
            position.direction = Direction.WEST;
            break;
          default:
            break;
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
  return position;
};

export const storeTable = (table: string[][]) => {
  try {
    fs.writeFileSync(tablePath, JSON.stringify({ table: table }));
  } catch (error) {
    console.error(error);
  }
};

export const readTable = () => {
  try {
    const data = fs.readFileSync(tablePath, 'utf8');
    const table = JSON.parse(data);
    return table.table;
  } catch (error) {
    console.error('error: Please place robot first with PLACE command');
  }
};

export const printTable = (table: string[][]) => {
  console.log(table.reverse());
};
