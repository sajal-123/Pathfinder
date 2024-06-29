import { ReactNode, createContext, useState } from "react";
import { tileType } from "../utils/types";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constant";


interface TileContextInterface {
    startTile: tileType,
    setStartTile(startTile: tileType): void,
    endTile: tileType,
    setEndTile(endTile: tileType): void,
}

export const TileContext = createContext<TileContextInterface | undefined>(undefined);

export const TileProvider = ({ children }: { children: ReactNode }) => {
    const [startTile, setStartTile] = useState<tileType>(START_TILE_CONFIGURATION);
    const [endTile, setEndTile] = useState<tileType>(END_TILE_CONFIGURATION);
    return (
        <TileContext.Provider value={{ startTile, setStartTile, endTile, setEndTile }}>
            {children}
        </TileContext.Provider>
    )

}