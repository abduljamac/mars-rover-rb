import { Coordinate, Orientation } from "../types";

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
}
