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
});
