import { Command } from 'commander';
import { placeRobot } from './commands';
import { printBoard } from './utils';
const program = new Command();

program.name('toy-robot').description('Toy Robot CLI project').version('1.0.0');

program
  .command('PLACE')
  .description('Places the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST')
  .argument('<X,Y,F>', 'Position on the board and facing direction ( X = row; Y = column; F = direction )')
  .action((str) => {
    const board = placeRobot(str);
    printBoard(board);
  });

program.parse();
