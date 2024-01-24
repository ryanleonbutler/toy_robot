import { createNewTable, getPosition, parsePositionInput } from '../src/utils';
import { newTable, placeFourFourSouth, placeZeroZeroNorth, posFourFourSouth, posZeroZeroNorth } from './constants';

describe('Utils', () => {
  test('createNewTable', () => {
    const result = createNewTable();
    expect(result).toEqual(newTable);
  });

  test.each([
    ['placeZeroZeroNorth', placeZeroZeroNorth, posZeroZeroNorth],
    ['placeFourFourSouth', placeFourFourSouth, posFourFourSouth],
  ])('parsePositionInput(%s)', (name, table, expected) => {
    const result = getPosition(table.reverse());
    expect(result).toEqual(expected);
  });

  test.each([
    ['0,0,NORTH', posZeroZeroNorth],
    ['4,4,SOUTH', posFourFourSouth],
  ])('parsePositionInput(%s)', (input, expected) => {
    const result = parsePositionInput(input);
    expect(result).toEqual(expected);
  });
});
