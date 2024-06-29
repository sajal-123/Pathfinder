import './App.css';
import { PathfindingProvider } from './context/PathfindingContext';
import { TileProvider } from './context/TileContext';
import { SpeedContextProvider } from './context/SpeedContext';
import { Grid } from './components/grid'; // Corrected import name to 'Grid'
import { useRef } from 'react';
import Nav from './components/Nav';

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedContextProvider>
          <div className='h-screen flex flex-col items-center justify-around w-full bg-gradient-to-b from-gray-400 via-blue-400 to-purple-400 font-bold'>
            <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedContextProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;
