import React from 'react'

interface Props {
  hoveredSquares: string[];
}

const HoveredSquares: React.FC<Props> = ({ hoveredSquares }) => {
  const makeSquareName = (square: string) => { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, row, col] = square.split('-');
    return `row-${row} col-${col}`;
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-xl font-bold mb-3'>Hovered squares</p>
      <div className='flex flex-col items-center justify-center gap-3'>
        {hoveredSquares.map((square) => (
          <div key={square} className='px-10 py-3 w-full bg-yellow-400'>{makeSquareName(square)}</div>
        ))}
      </div>
    </div>
  )
}

export default HoveredSquares
