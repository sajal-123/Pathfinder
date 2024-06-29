import { isEqual } from "./helper";
import { tileType } from "./types";

export function isInQueue(tile: tileType, queue: tileType[]) {
  for (let i = 0; i < queue.length; i++) {
    if (isEqual(tile, queue[i])) return true;
  }
  return false;
}