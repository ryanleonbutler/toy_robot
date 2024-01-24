# Toy Robot Simulator

## Problem Statement / Requirements

- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from
  falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however
  further valid movement commands must still be allowed.
- Create an application that can read in commands of the following form:
- PLACE X,Y,F
- MOVE
- LEFT
- RIGHT
- REPORT
- PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any
  order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE
  command has been executed.
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- REPORT will announce the X,Y and F of the robot. This can be in any form, but standard
  output is sufficient.
- A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT and
  REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application. (file input commands.txt)

## Install guide

```bash
> git clone https://github.com/ryanleonbutler/toy_robot.git && cd toy_robot

> npm install && npm run build

> node dist/cli.js --help

```

## User guide

### --help

```
> node dist/cli.js --help

Usage: toy-robot [options] [command]

Toy Robot CLI project

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  PLACE <X,Y,F>   Places the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST
  MOVE            Moves the toy robot one position on the table in the direction it is facing
  help [command]  display help for command
```

### PLACE

```
> node dist/cli.js PLACE --help

Usage: toy-robot [options] [command]

Toy Robot CLI project

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  PLACE <X,Y,F>   Places the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST
  MOVE            Moves the toy robot one position on the table in the direction it is facing
  help [command]  display help for command
```

### MOVE

```
> node dist/cli.js MOVE --help

Usage: toy-robot MOVE [options]

Moves the toy robot one position on the table in the direction it is facing

Options:
  -h, --help  display help for command
```

### RIGHT

```
> node dist/cli.js RIGHT --help

Usage: toy-robot RIGHT [options]

Rotates the robot RIGHT 90 degrees without changing the position of the robot

Options:
  -h, --help  display help for command
```

### LEFT

```
> node dist/cli.js LEFT --help
Usage: toy-robot LEFT [options]

Rotates the robot LEFT 90 degrees without changing the position of the robot

Options:
  -h, --help  display help for command
```

### REPORT

```
> node dist/cli.js REPORT --help

Usage: toy-robot REPORT [options]

Returns the X,Y and F of the robot on the table

Options:
  -h, --help  display help for command
```
