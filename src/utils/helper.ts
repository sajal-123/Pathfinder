import { tileType, GridType } from "./types";
import { MAX_ROW, MAX_col } from "./constant";

const createRow = (row: number, startTile: tileType, endTile: tileType): tileType[] => {
    const currentRow: tileType[] = [];
    for (let col = 0; col < MAX_col; col++) {
        currentRow.push({
            row,
            col,
            isEnd: row === endTile.row && col === endTile.col,
            isStart: row === startTile.row && col === startTile.col,
            isPath: false,
            isWall: false,
            distance: Infinity,
            isTraversed: false,
            parent: null
        });
    }
    return currentRow;
};

export const createGrid = (startTile: tileType, endTile: tileType): GridType => {
    const grid: GridType = [];
    for (let row = 0; row < MAX_ROW; row++) {
        grid.push(createRow(row, startTile, endTile));
    }
    return grid;
};


export const checkIfStartOrEnd = (row: number, col: number) => {
    return (
        (row == 1 && col == 1) || (row == MAX_ROW - 2 && col == MAX_col - 2)
    )
}


export const createNewGrid = (grid: GridType, row: number, col: number) => {
    const newGrid = grid.slice();
    const newTile = {
        ...newGrid[row][col],
        isWall: !newGrid[row][col].isWall,
    };

    newGrid[row][col] = newTile;
    return newGrid;
};

export const isEqual = (a: tileType, b: tileType) => {
    return (a.col == b.col && a.row == b.row);
}

export const isRowColEqual = (row: number, col: number, tile: tileType) => {
    return row === tile.row && col === tile.col;
};



export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getRandInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};



export const checkStack = (tile: tileType, stack: tileType[]) => {
    for (let i = 0; i < stack.length; i++) {
        if (isEqual(stack[i], tile)) return true;
    }
    return false;
};

export const dropFromQueue = (tile: tileType, queue: tileType[]) => {
    for (let i = 0; i < queue.length; i++) {
        if (isEqual(tile, queue[i])) {
            queue.splice(i, 1);
            break;
        }
    }
};