import { usepathfinding } from '../hooks/usepathfinding';
import { twMerge } from 'tailwind-merge';
import { MAX_ROW, MAX_col } from '../utils/constant';
import { Tile } from './Tile';
import { MutableRefObject, useState } from 'react';
import { checkIfStartOrEnd, createNewGrid } from '../utils/helper';

export function Grid({ isVisualizationRunningRef }: { isVisualizationRunningRef: MutableRefObject<boolean> }) {

    const { grid, setGrid } = usepathfinding();
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        setIsMouseDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    };

    const handleMouseUp = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        setIsMouseDown(false);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    };

    const handleMouseEnter = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        if (isMouseDown) {
            const newGrid = createNewGrid(grid, row, col);
            setGrid(newGrid);
        }
    };

    return (
        <div className={twMerge(
            // Base classes
            "flex items-center flex-col justify-center border-sky-300",
            // Control Grid height
            `lg:min-h-[${MAX_ROW * 17}px] md:min-h-[${MAX_ROW * 15}px] xs:min-h-[${MAX_ROW * 8}px] min-h-[${MAX_ROW * 7}px]`,
            // Controlling grid width
            `lg:w-[${MAX_col * 17}px] md:w-[${MAX_col * 15}px] xs:w-[${MAX_col * 8}px] w-[${MAX_col * 7}px]`,
            // Colorful background
            "bg-gradient-to-b from-green-300 to-blue-300 hover:from-green-400 hover:to-blue-400",
            // Small animation
            "transition ease-in-out duration-300"
        )}>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className='flex'>
                    {row.map((tile, colIndex) => {
                        const { row, col, isEnd, isStart, isPath, isWall, isTraversed } = tile;
                        return (
                            <Tile
                                key={`${row}-${col}`}
                                row={row}
                                col={colIndex}
                                isEnd={isEnd}
                                isStart={isStart}
                                isPath={isPath}
                                isWall={isWall}
                                isTraversed={isTraversed}
                                handleMouseDown={() => handleMouseDown(row, col)}
                                handleMouseUp={() => handleMouseUp(row, col)}
                                handleMouseEnter={() => handleMouseEnter(row, col)}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
