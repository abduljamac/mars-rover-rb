# Red Badger Developer Programming Problem

## Project Structure

- `src/`:
  - `model/`: Contains the `MarsRover` class
  - `types.ts`: Defines types and interfaces
  - `helper.ts`: Contains functions for file input and output parsing
  - `index.ts`: The main entry point for the code

## Quick Start

1. Install Dependencies

```
 npm install
```

2. Prepare an input file (e.g., `input.txt`) with the following format:

- First line: Grid size
- Second line: Rover initial position and orientation
- Third line: Movement instructions

Example:

```
5 3
1 1 E
RFRFRFRF
```

3.  Run the program:

```
npm run start
```

4. Check the `output.txt` file for the results.

5. To run the tests:

```
npm run test
```

## Explanation

I approached the solution to the coding challenge this way because it provides a clear, maintainable, and extensible structure for solving the Mars Robot problem. Creating a MarsRover class allows for encapsulation of the rover's state (position, orientation) and behavior (movement, rotation) in a single class. In addition, it provided a nice solution to handling the scents problem. By making scents a static array, the information is shared across all instances of the class, allowing all rover instances to share information about previously lost rovers
