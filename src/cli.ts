import { Command } from 'commander';
import { moveRobot, placeRobot } from './commands';
import { getPosition, parsePositionInput, printPosition, printTable, readTable } from './utils';

const program = new Command();

program.name('toy-robot').description('Toy Robot CLI project').version('1.0.0');

program
  .command('PLACE')
  .description('Places the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST')
  .argument('<X,Y,F>', 'Position on the table and facing direction ( X = row; Y = column; F = direction )')
  .action((str) => {
    const position = parsePositionInput(str);
    const newTable = placeRobot(position);
    printTable(newTable);
  });

program
  .command('MOVE')
  .description('Moves the toy robot one position on the table in the direction it is facing')
  .action(() => {
    const table = readTable();
    if (table != undefined && Array.isArray(table) && table.length === 5) {
      const position = getPosition(table);
      const newPosition = moveRobot(table, position);
      const newTable = placeRobot(newPosition);
      printTable(newTable);
    }
  });

program
  .command('REPORT')
  .description('Returns the X,Y and F of the robot on the table')
  .action(() => {
    const table = readTable();
    if (table != undefined && Array.isArray(table) && table.length === 5) {
      const position = getPosition(table);
      printPosition(position);
    }
  });

program.parse();
