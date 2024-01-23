import { helloWorld } from '../src';

describe('Toy Robot', () => {
  test.each([
    ['world', 'Hello world!'],
    ['Ryan', 'Hello Ryan!'],
  ])('helloWorld(%s)', (name, expected) => {
    expect(helloWorld(name)).toEqual(expected);
  });
});
