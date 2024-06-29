export type AlgorithType = 'DIJKSTRA' | 'A_STAR' | 'BFS' | 'DFS';

export interface AlgorithmTypeSelect {
  value: AlgorithType,
  label:string
}

export type MazeType = 'BINARY_TREE' | 'RECURSIVE_DIVISION' | 'NONE'

export interface MazeTypeSelect {
  value:  MazeType,
  label:string
}

export type tileType = {
  row: number;
  col: number;
  isEnd: boolean;
  isStart: boolean;
  isPath: boolean;
  isWall: boolean;
  distance: number;
  isTraversed: boolean;
  parent: tileType | null;
};

export type GridType = tileType[][]

export type speedType = 1 | 2 | 0.5;

export interface SpeedTypeSelect{

       value:speedType,
       label:string
}