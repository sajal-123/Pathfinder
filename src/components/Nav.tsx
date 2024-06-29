import { Select } from './select'
import { usepathfinding } from '../hooks/usepathfinding';
import { ALGORITHMS, EXTENDED_SLEEP_TIME, MAZES, SLEEP_TIME, SPEEDS } from '../utils/constant';
import { AlgorithType, MazeType, speedType } from '../utils/types';
import { useTile } from '../hooks/useTile';
import { resetGrid } from '../utils/resetGrid';
import { MutableRefObject, useState } from 'react';
import { runMazeAlgorithm } from '../utils/runMazeAlgorithm';
import { useSpeed } from '../hooks/useSpeed';
import PlayButton from './PlayButton';
import { runPathfindingAlgorithm } from '../utils/runPathfindiingAlgorithm';
import { animatePath } from '../utils/animatePath';

function Nav({
    isVisualizationRunningRef,
}: {
    isVisualizationRunningRef: MutableRefObject<boolean>;
}) {
    const [isDisable, setIsDisabled] = useState(false)
    const { maze, setMaze, grid, setGrid, algorithm, setAlgorithm, isGraphVisualized, setisGraphVisualized } = usepathfinding();
    const { startTile, endTile } = useTile()
    const { speed, setSpeed } = useSpeed()

    const handleGenerateMaze = (maze: MazeType) => {
        if (maze == "NONE") {
            setMaze(maze)
            resetGrid({ grid, startTile, endTile });
        }
        setMaze(maze)
        setIsDisabled(true)
        // run maze algorithm
        runMazeAlgorithm({ maze, grid, startTile, endTile, setIsDisabled, speed });
    }

    const handlerRunVisualizer = () => {
        if (isGraphVisualized) {
            setisGraphVisualized(false);
            resetGrid({ grid: grid.slice(), startTile, endTile });
            return;
        }
        const { traversedTiles, path } = runPathfindingAlgorithm({
            algorithm,
            grid,
            startTile,
            endTile,
        });
        animatePath(traversedTiles, path, startTile, endTile, speed);
        setIsDisabled(true);
        isVisualizationRunningRef.current = true;
        setTimeout(() => {
            const newGrid = grid.slice();
            setGrid(newGrid);
            setisGraphVisualized(true);
            setIsDisabled(false);
            isVisualizationRunningRef.current = false;
        }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
    };




    return (
        <div className='flex items-center justify-center w-full border-b min-h-[4.5rem] px-0 sm:px-4 bg-gradient-to-b from-blue-500 to-green-500 animate-pulse rounded-full'>
        <div className='flex items-center justify-center lg:justify-between w-full sm:w-[54rem]'>
          <h1 className="lg:flex hidden w-[40%] text-2xl pl-1 text-white">
            Path Visualizer
          </h1>
          <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
            <Select
              label='Maze'
              value={maze}
              options={MAZES}
              onChange={(e) => {
                handleGenerateMaze(e.target.value as MazeType);
              }}
            />
            <Select
              label='Graph'
              value={algorithm}
              options={ALGORITHMS}
              onChange={(e) => {
                setAlgorithm(e.target.value as AlgorithType);
              }}
            />
            <Select
              label='Speed'
              value={speed}
              options={SPEEDS}
              onChange={(e) => {
                setSpeed(Number(e.target.value) as speedType);
              }}
            />
            <PlayButton
              isDisabled={isDisable}
              isGraphVisualized={isGraphVisualized}
              handlerRunVisualizer={handlerRunVisualizer}
            />
          </div>
        </div>
      </div>
    )
}

export default Nav
