import {   AlgorithmTypeSelect, MazeTypeSelect, SpeedTypeSelect } from "./types";

export const MAX_ROW = 39;
export const MAX_col = 49;


export const START_TILE_CONFIGURATION = {
        row: 1,
        col: 1,
        isEnd: false,
        isStart: false,
        isPath: false,
        isWall: false,
        distance: 0,
        isTraversed: false,
        parent: null
}
export const END_TILE_CONFIGURATION = {
        row: MAX_ROW - 2,
        col: MAX_col - 2,
        isEnd: false,
        isStart: false,
        isPath: false,
        isWall: false,
        distance: 0,
        isTraversed: false,
        parent: null
}

export const TILE_STYLE =
        "lg:w-[15px] md:w-[12px] xs:w-[7px] w-[7px] lg:h-[15px] md:h-[12px] xs:h-[7px] h-[7px] border-t border-r border-sky-200";

export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-500";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";

export const MAZES: MazeTypeSelect[] = [
        { label: "No Maze", value: "NONE" },
        { label: "Binary Tree", value: "BINARY_TREE" },
        { label: "Recursive Division", value: "RECURSIVE_DIVISION" },
]

export const SPEEDS: SpeedTypeSelect[] = [
        { label: "Slow", value: 2 },
        { label: "Medium", value: 1 },
        { label: "Fast", value: 0.5 },
]
export const ALGORITHMS: AlgorithmTypeSelect[] = [
        { label: "Dijkstra", value: "DIJKSTRA" },
        { label: "A*", value: "A_STAR" },
        { label: "bfs", value: "BFS" },
        { label: "dfs", value: "DFS" },
]


export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;