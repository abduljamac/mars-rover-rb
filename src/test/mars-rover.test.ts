import { MarsRover } from "../model/mars-rover";

describe("MarsRover", () => {
  let rover: MarsRover;

  beforeEach(() => {
    rover = new MarsRover({ x: 5, y: 3 }, { x: 1, y: 1 }, "E");
  });
  test("should initialize with correct position and orientation", () => {
    expect(rover.getGrid()).toEqual({ x: 5, y: 3 });
    expect(rover.getLocation()).toEqual({ x: 1, y: 1 });
    expect(rover.getOrientation()).toBe("E");
    expect(rover.isLost()).toBe(false);
  });

  it("should rotate right correctly", () => {
    rover.move("R");
    expect(rover.getOrientation()).toBe("S");
  });

  it("should rotate left correctly", () => {
    rover.move("L");
    expect(rover.getOrientation()).toBe("N");
  });

  test("should move forward correctly", () => {
    rover.move("F");
    expect(rover.getLocation()).toEqual({ x: 2, y: 1 });
  });

  test("should throw error for invalid command", () => {
    expect(() => rover.move("X")).toThrow("Invalid command: X");
  });

  test("should handle lowercase commands", () => {
    rover.move("rflf");
    expect(rover.getLocation()).toEqual({ x: 2, y: 0 });
    expect(rover.getOrientation()).toBe("E");
  });

  test("should become lost when moving off the grid when facing east", () => {
    rover.move("FFFFFF");
    expect(rover.isLost()).toBe(true);
    expect(rover.speak()).toBe(
      "X-Coordinates: 6, Y-Coordinates: 1, Direction: E LOST"
    );
  });

  test("should throw error when grid exceeds maximum coordinate value", () => {
    expect(() => new MarsRover({ x: 51, y: 3 }, { x: 1, y: 1 }, "E")).toThrow(
      "Grid exceeds maximum coordinate value of 50"
    );
  });

  test("should throw error when initial location exceeds maximum coordinate value", () => {
    expect(() => new MarsRover({ x: 5, y: 3 }, { x: 1, y: 51 }, "E")).toThrow(
      "Initial location exceeds maximum coordinate value of 50"
    );
  });

  test("should throw error when instruction exceeds maximum instructions length", () => {
    const rover = new MarsRover({ x: 5, y: 3 }, { x: 1, y: 1 }, "E");
    const instruction = "F".repeat(101);
    expect(() => rover.move(instruction)).toThrow(
      "Instruction string exceeds maximum length of 100"
    );
  });
});
