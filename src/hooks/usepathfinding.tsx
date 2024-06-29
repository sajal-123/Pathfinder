import { useContext } from "react"
import { PathfindingContext } from "../context/PathfindingContext"


export const usepathfinding=()=>{
    const context = useContext(PathfindingContext);
    if(!context)
        throw new Error("pathfinding must be used in the pathfinderprovider");
    return context;   
}