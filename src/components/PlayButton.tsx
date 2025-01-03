import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

function PlayButton({
  isDisabled,
  isGraphVisualized,
  handlerRunVisualizer
}: {
  isDisabled: boolean,
  isGraphVisualized: boolean,
  handlerRunVisualizer: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button 
      disabled={isDisabled}
      onClick={handlerRunVisualizer}
      className="disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full bg-gradient-to-r from-green-500 to-green-500 hover:from-green-700 hover:scale-105 duration-100 hover:to-green-700 border-none active:ring-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-30 p-2"
    >
      {isGraphVisualized ? <GrPowerReset className="w-5 h-5 text-white"/> : <BsFillPlayFill className="w-5 h-5 text-white"/>}
    </button>
  );
}

export default PlayButton;
