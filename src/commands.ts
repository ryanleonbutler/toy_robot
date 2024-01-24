import { Direction, Position } from './interfaces';
import { createNewTable, getPosition, storeTable } from './utils';

export const placeRobot = (position: Position): string[][] => {
  const table = createNewTable();
  if (position.row && position.column && position.direction) {
    for (const row of table) {
      if (table.indexOf(row) !== Number(position.row)) {
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

  storeTable(table);
  return table;
};

export const moveRobot = (table: string[][], position: Position): Position => {
  try {
    if (position.direction === Direction.NORTH && Number(position.row) < 4) {
      position.row = String(Number(position.row) + 1);
    } else if (position.direction === Direction.SOUTH && Number(position.row) > 0) {
      position.row = String(Number(position.row) - 1);
    } else if (position.direction === Direction.EAST && Number(position.column) < 4) {
      position.column = String(Number(position.column) + 1);
    } else if (position.direction === Direction.WEST && Number(position.column) > 0) {
      position.column = String(Number(position.column) - 1);
    } else {
      throw Error;
    }
  } catch (error) {
    console.warn('warn: You cannot move off the board. Please change direction with LEFT or RIGHT and try again');
    return getPosition(table);
  }

  return position;
};
