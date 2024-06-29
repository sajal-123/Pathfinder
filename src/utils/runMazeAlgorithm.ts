import { binaryTree } from "../lib/algorithms/maze/binaryTree";
import recursiveDivision from "../lib/algorithms/maze/recursiveDivision";
import { MAX_col, MAX_ROW, SPEEDS } from "./constant";
import { constructBorder } from "./constructBorder";
import { GridType, MazeType, speedType, tileType } from "./types";

export const runMazeAlgorithm = async ({
  maze,
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed=1,
}: {
  maze: MazeType;
  grid: GridType;
  startTile: tileType;
  endTile: tileType;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: speedType;
}) => {
  if (maze == "BINARY_TREE") {
    console.log("coming")
    await binaryTree(grid, startTile, endTile, setIsDisabled, speed);
  } else if (maze === "RECURSIVE_DIVISION") {
    const currentSpeed = SPEEDS.find((s) => s.value === speed)!.value ?? 2;
    await constructBorder(grid, startTile, endTile);
    await recursiveDivision({
      grid,
      startTile,
      endTile,
      row: 1,
      col: 1,
      height: Math.floor((MAX_ROW - 1) / 2),
      width: Math.floor((MAX_col - 1) / 2),
      setIsDisabled,
      speed,
    });
    setTimeout(() => {
      setIsDisabled(false);
    }, 800 * currentSpeed);
  }
};