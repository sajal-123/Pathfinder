import { GridType, tileType } from "./types";
import { START_TILE_CONFIGURATION, END_TILE_CONFIGURATION, MAX_ROW, MAX_col, TILE_STYLE } from "./constant";
import { isEqual } from "./helper";

export const resetGrid = ({
    grid,
    startTile = START_TILE_CONFIGURATION,
    endTile = END_TILE_CONFIGURATION

}: {
    grid: GridType,
    startTile: tileType,
    endTile: tileType
}
) => {
    for (let row = 0; row < MAX_ROW; row++) {
        for (let col = 0; col < MAX_col; col++) {
            const tile = grid[row][col];
            tile.distance = Infinity;
            tile.isTraversed = false;
            tile.parent = null;
            tile.isPath = false;
            tile.isWall = false;
            if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                const tileelement = document.getElementById(`${tile.row}-${tile.col}`);
                if (tileelement) {
                    tileelement.className = TILE_STYLE;
                }
                if (tile.row == MAX_ROW - 1) {
                    tileelement?.classList.add('border-b');
                }
                if (tile.col == MAX_col - 1) {
                    tileelement?.classList.add('border-l');
                }
            }
        }
    }
}