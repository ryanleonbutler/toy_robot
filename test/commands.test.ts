import { placeRobot } from '../src/commands';
import { placeError, placeFourFourSouth, placeZeroZeroNorth } from './constants';

describe('Toy Robot', () => {
  test.each([
    ['0,0,NORTH', placeZeroZeroNorth],
    ['4,4,SOUTH', placeFourFourSouth],
    ['', placeError],
  ])('placeRobot(%s)', (position, expected) => {
    const result = placeRobot(position);
    expect(result).toEqual(expected);
  });
});
