import { ReactNode, createContext, useState } from "react";
import { MazeType, AlgorithType, GridType } from "../utils/types";
import { createGrid } from "../utils/helper";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constant";

interface PathfindingContextInterface {
    algorithm: AlgorithType;
    setAlgorithm: (algorithm: AlgorithType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setisGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathfindingContext = createContext<PathfindingContextInterface | undefined>(undefined);

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
    const [algorithm, setAlgorithm] = useState<AlgorithType>("BFS");
    const [maze, setMaze] = useState<MazeType>("BINARY_TREE");
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION));
    const [isGraphVisualized, setisGraphVisualized] = useState<boolean>(false);

    return (
        <PathfindingContext.Provider value={{ algorithm, setAlgorithm, maze, setMaze, grid, setGrid, isGraphVisualized, setisGraphVisualized }}>
            {children}
        </PathfindingContext.Provider>
    );
};
