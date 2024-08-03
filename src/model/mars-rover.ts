import { Command, Coordinate, Orientation } from "../types";

export class MarsRover {
  private grid: Coordinate;
  private location: Coordinate;
  private orientation: Orientation;
  private lost: boolean = false;

  constructor(
    grid: Coordinate,
    location: Coordinate,
    orientation: Orientation
  ) {
    this.grid = grid;
    this.location = location;
    this.orientation = orientation;
  }

  getGrid(): Coordinate {
    return this.grid;
  }

  getLocation(): Coordinate {
    return this.location;
  }

  getOrientation(): Orientation {
    return this.orientation;
  }

  isLost(): boolean {
    return this.lost;
  }

  speak(): string {
    const message = `X-Coordinates: ${this.location.x}, Y-Coordinates: ${this.location.y}, Direction: ${this.orientation}`;
    return this.lost ? `${message} LOST` : message;
  }

  move(commands: string): void {
    const commandsArr = Array.from(commands.toUpperCase()) as Command[];
    for (const command of commandsArr) {
      if (this.lost) break;
      switch (command) {
        case "R":
          this.rotateRight();
          break;
        case "L":
          this.rotateLeft();
          break;
        case "F":
          this.moveForward();
          break;
        default:
          throw new Error(`Invalid command: ${command}`);
      }
    }
    this.speak();
  }

  private rotateRight(): void {
    switch (this.orientation) {
      case "N":
        this.orientation = "E";
        break;
      case "S":
        this.orientation = "W";
        break;
      case "E":
        this.orientation = "S";
        break;
      case "W":
        this.orientation = "N";
        break;
    }
  }

  private rotateLeft(): void {
    switch (this.orientation) {
      case "N":
        this.orientation = "W";
        break;
      case "S":
        this.orientation = "E";
        break;
      case "E":
        this.orientation = "N";
        break;
      case "W":
        this.orientation = "S";
        break;
    }
  }

  private moveForward(): void {
    let expectedLocation = { x: this.location.x, y: this.location.y };
    switch (this.orientation) {
      case "N":
        expectedLocation.y++;
        break;
      case "S":
        expectedLocation.y--;
        break;
      case "E":
        expectedLocation.x++;
        break;
      case "W":
        expectedLocation.x--;
        break;
    }

    if (this.isRoverWithinBounds(expectedLocation)) {
      this.location = expectedLocation;
    } else {
      this.lost = true;
      this.location = expectedLocation;
    }
  }

  private isRoverWithinBounds(roverLocation: Coordinate): boolean {
    return (
      roverLocation.x >= 0 &&
      roverLocation.x <= this.grid.x &&
      roverLocation.y >= 0 &&
      roverLocation.y <= this.grid.y
    );
  }
}
