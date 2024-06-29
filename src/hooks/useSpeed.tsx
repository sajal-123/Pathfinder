import { useContext } from "react"
import { SpeedContext } from "../context/SpeedContext";

export const useSpeed=()=>{
    const context = useContext(SpeedContext);
    if(!context)
        throw new Error("SpeedContext must be used in the pathfinderprovider");
    return context;   
}