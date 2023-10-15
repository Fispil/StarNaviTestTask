import React from 'react';

interface Props {
  squareSize: number;
  hoveredSquares: string[];
  setHoveredSquares: React.Dispatch<React.SetStateAction<string[]>>;
}

const Squares: React.FC<Props> = ({ squareSize, hoveredSquares, setHoveredSquares }) => {
  const totalSquares = squareSize * squareSize;

  const handleSquareHover = (squareIndex: string) => {
    setHoveredSquares((prevValue: string[]) => {
      if (prevValue.includes(squareIndex)) {
        return prevValue.filter((square: string) => square !== squareIndex);
      } else {
        return [...prevValue, squareIndex];
      }
    });
  };

  const generateId = (row: number, col: number): string => {
    return `square-${row + 1}-${col + 1}`;
  };

  const isActive = (id: string) => {
    return hoveredSquares.includes(id);
  }

  const getGridStyles = (id: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, row, col] = id.split('-');
    return {
      gridRow: `${Number(row) + 1}`,
      gridColumn: `${Number(col) + 1}`,
    };
  };

  return (
    <div className={`grid grid-cols-${squareSize} gap-1`}>
      {Array.from({ length: totalSquares }, (_, index) => {
        const row = Math.floor(index / squareSize);
        const col = index % squareSize;
        const id = generateId(row, col);
        const gridStyles = getGridStyles(id);

        return (
          <div
            key={id}
            id={id}
            className={`w-16 h-16  ${isActive(id) ? 'bg-blue-400' : 'bg-gray-300'} cursor-pointer`}
            onMouseEnter={() => handleSquareHover(id)}
            style={gridStyles}
          >
          </div>
        );
      })}
    </div>
  );
};

export default Squares;