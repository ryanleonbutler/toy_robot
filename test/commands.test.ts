import { moveRobot, placeRobot, rotateRobot } from '../src/commands';
import { RotateDirection } from '../src/interfaces';
import {
  placeError,
  placeFourFourSouth,
  placeZeroZeroNorth,
  posFourFourNorth,
  posFourFourSouth,
  posFourFourWest,
  posFourThreeWest,
  posOneZeroNorth,
  posThreeFourSouth,
  posZeroOneEast,
  posZeroZeroEast,
  posZeroZeroNorth,
} from './constants';

describe('Commands', () => {
  test.each([
    ['placeZeroZeroNorth', posZeroZeroNorth, placeZeroZeroNorth],
    ['placeFourFourSouth', posFourFourSouth, placeFourFourSouth],
    ['placeError', { row: '', column: '', direction: '' }, placeError],
    ['placeOutOfBounds', { row: '5', column: '0', direction: 'NORTH' }, placeError],
  ])('placeRobot(%s)', (name, position, expected) => {
    const result = placeRobot(position);
    expect(result).toEqual(expected.reverse());
  });

  test.each([
    ['moveNorthFromZeroZero', posZeroZeroNorth, posOneZeroNorth],
    ['moveSouthFromFourFour', posFourFourSouth, posThreeFourSouth],
    ['moveEastFromZeroZero', posZeroZeroEast, posZeroOneEast],
    ['moveWestFromFourFour', posFourFourWest, posFourThreeWest],
    ['moveNorthFromFourFour', posFourFourNorth, posFourFourNorth],
  ])('moveRobot(%s)', (name, position, expected) => {
    const result = moveRobot(position);
    expect(result).toEqual(expected);
  });

  test.each([
    [
      'rotateFromNorthLeft',
      RotateDirection.LEFT,
      { row: '0', column: '0', direction: 'NORTH' },
      { row: '0', column: '0', direction: 'WEST' },
    ],
    [
      'rotateFromWestLeft',
      RotateDirection.LEFT,
      { row: '0', column: '0', direction: 'WEST' },
      { row: '0', column: '0', direction: 'SOUTH' },
    ],
    [
      'rotateFromSouthLeft',
      RotateDirection.LEFT,
      { row: '0', column: '0', direction: 'SOUTH' },
      { row: '0', column: '0', direction: 'EAST' },
    ],
    [
      'rotateFromEastLeft',
      RotateDirection.LEFT,
      { row: '0', column: '0', direction: 'EAST' },
      { row: '0', column: '0', direction: 'NORTH' },
    ],
    [
      'rotateFromNorthRight',
      RotateDirection.RIGHT,
      { row: '0', column: '0', direction: 'NORTH' },
      { row: '0', column: '0', direction: 'EAST' },
    ],
    [
      'rotateFromEastRight',
      RotateDirection.RIGHT,
      { row: '0', column: '0', direction: 'EAST' },
      { row: '0', column: '0', direction: 'SOUTH' },
    ],
    [
      'rotateFromSouthRight',
      RotateDirection.RIGHT,
      { row: '0', column: '0', direction: 'SOUTH' },
      { row: '0', column: '0', direction: 'WEST' },
    ],
    [
      'rotateFromWestRight',
      RotateDirection.RIGHT,
      { row: '0', column: '0', direction: 'WEST' },
      { row: '0', column: '0', direction: 'NORTH' },
    ],
  ])('%s', (name, rotateDirection, position, expected) => {
    const result = rotateRobot(rotateDirection, position);
    console.log(result);
    console.log(expected);
    expect(result).toEqual(expected);
  });
});
