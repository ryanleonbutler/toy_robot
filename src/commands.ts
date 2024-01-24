import { Direction, Position } from './interfaces';
import { createNewTable, storeTable } from './utils';

export const placeRobot = (position: Position): string[][] => {
  const table = createNewTable();

  if (
    Number(position.row) > 4 ||
    Number(position.row) < 0 ||
    Number(position.column) > 4 ||
    Number(position.column) < 0
  ) {
    console.warn(
      'warn: You cannot place the robot off the board. Please choose a position that is on the board where both X and Y is >= 0 and <= 4'
    );
  } else {
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
  }

  return table;
};

export const moveRobot = (position: Position): Position => {
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
  }

  return position;
};

export const rotateRobot = (rotateDirection: string, position: Position): Position => {
  if (rotateDirection === 'LEFT' && position.direction === Direction.NORTH) {
    position.direction = Direction.WEST;
  } else if (rotateDirection === 'LEFT' && position.direction === Direction.WEST) {
    position.direction = Direction.SOUTH;
  } else if (rotateDirection === 'LEFT' && position.direction === Direction.SOUTH) {
    position.direction = Direction.EAST;
  } else if (rotateDirection === 'LEFT' && position.direction === Direction.EAST) {
    position.direction = Direction.NORTH;
  } else if (rotateDirection === 'RIGHT' && position.direction === Direction.NORTH) {
    position.direction = Direction.EAST;
  } else if (rotateDirection === 'RIGHT' && position.direction === Direction.EAST) {
    position.direction = Direction.SOUTH;
  } else if (rotateDirection === 'RIGHT' && position.direction === Direction.SOUTH) {
    position.direction = Direction.WEST;
  } else if (rotateDirection === 'RIGHT' && position.direction === Direction.WEST) {
    position.direction = Direction.NORTH;
  }

  return position;
};
