/* eslint-disable @typescript-eslint/no-unused-vars */
import { twMerge } from "tailwind-merge";
import { END_TILE_STYLE, MAX_ROW, MAX_col, PATH_TILE_STYLE, START_TILE_STYLE, TILE_STYLE, TRAVERSED_TILE_STYLE, WALL_TILE_STYLE } from "../utils/constant";
interface MouseFunction {
    (row: number, col: number): void
}

export const Tile = ({
    row,
    col,
    isEnd,
    isStart,
    isPath,
    isWall,
    isTraversed,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter
}: {
    row: number;
    col: number;
    isEnd: boolean;
    isStart: boolean;
    isPath: boolean;
    isWall: boolean;
    isTraversed: boolean;
    handleMouseDown: MouseFunction;
    handleMouseUp: MouseFunction;
    handleMouseEnter: MouseFunction;
}) => {
    let tyleStyle;
    if (isStart) { tyleStyle = START_TILE_STYLE; }
    else if (isEnd) { tyleStyle = END_TILE_STYLE; }
    else if (isWall) { tyleStyle = WALL_TILE_STYLE; }
    else if (isPath) { tyleStyle = PATH_TILE_STYLE; }
    else if (isTraversed) { tyleStyle = TRAVERSED_TILE_STYLE; }
    else { tyleStyle = TILE_STYLE }

    const borderStyle = row === MAX_ROW - 1 ? 'border-b' : col === MAX_col - 1 ? 'border-r' : '';
    const edgeStyle = row === MAX_ROW - 1 && col === MAX_col - 1 ? 'border-l' : '';
    return (
        <div className={twMerge(borderStyle, edgeStyle, tyleStyle)}
            id={`${row}-${col}`}
            onMouseDown={() => handleMouseDown(row, col)}
            onMouseUp={() => handleMouseUp(row, col)}
            onMouseEnter={() => handleMouseEnter(row, col)} />
    )
}