import { useState } from 'react'
import Modepick from './components/Modepick'
import Squares from './components/Squares';
import HoveredSquares from './components/HoveredSquares';

const App: React.FC = () => {
  const [squareSize, setSquareSize] = useState(0);
  const [hoveredSquares, setHoveredSquares] = useState<string[]>([]);

  return (
    <div className='flex gap-40'>
      <div>
        <Modepick setSquareSize={setSquareSize} />
        <Squares squareSize={squareSize} hoveredSquares={hoveredSquares} setHoveredSquares={setHoveredSquares} />
      </div>
      <HoveredSquares hoveredSquares={hoveredSquares} />
    </div>
  )
}

export default App