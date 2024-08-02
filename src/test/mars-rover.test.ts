import { MarsRover } from "../model/mars-rover";

describe("MarsRover", () => {
  test("should initialize with correct position and orientation", () => {
    const rover = new MarsRover({ x: 5, y: 3 }, { x: 1, y: 1 }, "E");

    expect(rover.getGrid()).toEqual({ x: 5, y: 3 });
    expect(rover.getLocation()).toEqual({ x: 1, y: 1 });
    expect(rover.getOrientation()).toBe("E");
    expect(rover.isLost()).toBe(false);
  });
});
