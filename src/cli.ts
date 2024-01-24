import { Command } from 'commander';
import { moveRobot, placeRobot, rotateRobot } from './commands';
import { getPosition, parsePositionInput, printPosition, printTable, readTable } from './utils';
import { RotateDirection } from './interfaces';

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
      const newPosition = moveRobot(position);
      const newTable = placeRobot(newPosition);
      printTable(newTable);
    }
  });

program
  .command('LEFT')
  .description('Rotates the robot LEFT 90 degrees without changing the position of the robot')
  .action(() => {
    const table = readTable();
    if (table != undefined && Array.isArray(table) && table.length === 5) {
      const position = getPosition(table);
      const newPosition = rotateRobot(RotateDirection.LEFT, position);
      const newTable = placeRobot(newPosition);
      printTable(newTable);
    }
  });

program
  .command('RIGHT')
  .description('Rotates the robot RIGHT 90 degrees without changing the position of the robot')
  .action(() => {
    const table = readTable();
    if (table != undefined && Array.isArray(table) && table.length === 5) {
      const position = getPosition(table);
      const newPosition = rotateRobot(RotateDirection.RIGHT, position);
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
