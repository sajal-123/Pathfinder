import { MAX_ROW, MAX_col, SPEEDS, WALL_TILE_STYLE } from "./constant";
import { isRowColEqual } from "./helper";
import { speedType, tileType } from "./types";



export const createWall=(
    startTile:tileType,
    endTile:tileType,
    speed:speedType
)=>{
   const delay = 6*SPEEDS.find((s)=>s.value===speed)!.value-1;
   for (let row = 0; row < MAX_ROW; row++) {
    setTimeout(() => {
      for (let col = 0; col < MAX_col; col++) {
        if (row % 2 === 0 || col % 2 === 0) {
          if (
            !isRowColEqual(row, col, startTile) &&
            !isRowColEqual(row, col, endTile)
          ) {
            setTimeout(() => {
              document.getElementById(
                `${row}-${col}`
              )!.className = `${WALL_TILE_STYLE} animate-wall`;
            }, delay * col);
          }
        }
      }
    }, delay * (MAX_ROW / 2) * row);
  }
};