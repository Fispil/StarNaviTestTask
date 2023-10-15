import React, { useState } from 'react';
import CustomDropDown from './CustomDropDown';
import { Mode } from '../types/Mode';

interface Props {
  setSquareSize: (squareSize: number) => void;
}

const Modepick: React.FC<Props> = ({ setSquareSize }) => {
  const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
  
  return (
    <div className='flex gap-3 items-center justify-start m-16'>
      <CustomDropDown selectedMode={selectedMode} onModeChange={setSelectedMode} />
      <button
        className="px-4 py-2  text-white bg-blue-600 rounded hover:bg-blue-500"
        onClick={() => setSquareSize(selectedMode?.field ? selectedMode.field : 0)}
      >
        START
      </button>
    </div>
  );
};

export default Modepick;

