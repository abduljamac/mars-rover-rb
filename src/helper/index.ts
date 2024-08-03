import { readFileSync, writeFileSync } from "fs";
import { Coordinate, Orientation } from "../types";
import { MarsRover } from "../model/mars-rover";

export function parseInputFile(inputFile: string, outputFile: string) {
  const data = readFileSync(inputFile, "utf-8");
  const lines = data.trim().split("\n");

  const gridInput = lines[0].split(" ");
  const grid: Coordinate = {
    x: Number(gridInput[0]),
    y: Number(gridInput[1]),
  };

  const results: string[] = [];

  for (let i = 1; i < lines.length; i += 2) {
    const [x, y, orientation] = lines[i].split(" ");
    const location: Coordinate = { x: Number(x), y: Number(y) };
    const rover = new MarsRover(grid, location, orientation as Orientation);

    const instructions = lines[i + 1];
    rover.move(instructions);

    results.push(rover.speak());
  }

  writeFileSync(outputFile, results.join("\n"), "utf-8");
}
