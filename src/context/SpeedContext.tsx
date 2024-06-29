import { ReactNode, createContext, useState } from "react";
import { speedType } from "../utils/types";


interface speedContextInterface {
    speed: speedType,
    setSpeed(speed: speedType): void,
}

export const SpeedContext = createContext<speedContextInterface | undefined>(undefined)


export const SpeedContextProvider = ({ children }: { children: ReactNode }) => {
    const [speed, setSpeed] = useState<speedType>(0.5);
    return (
        <SpeedContext.Provider value={{ speed, setSpeed }}>
            {children}
        </SpeedContext.Provider>
    )
}