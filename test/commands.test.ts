import { moveRobot, placeRobot } from '../src/commands';
import { getPosition } from '../src/utils';
import {
  placeError,
  placeFourFourSouth,
  placeFourFourWest,
  placeZeroZeroEast,
  placeZeroZeroNorth,
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
  ])('placeRobot(%s)', (name, position, expected) => {
    const result = placeRobot(position);
    expect(result).toEqual(expected.reverse());
  });

  test.each([
    ['moveNorthFromZeroZero', placeZeroZeroNorth, posZeroZeroNorth, posOneZeroNorth],
    ['moveSouthFromFourFour', placeFourFourSouth, posFourFourSouth, posThreeFourSouth],
    ['moveEastFromZeroZero', placeZeroZeroEast, posZeroZeroEast, posZeroOneEast],
    ['moveWestFromFourFour', placeFourFourWest, posFourFourWest, posFourThreeWest],
  ])('moveRobot(%s)', (name, table, position, expected) => {
    const result = moveRobot(table, position);
    expect(result).toEqual(expected);
  });
});
