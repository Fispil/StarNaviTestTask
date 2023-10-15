import React, { useState, useEffect } from 'react';
import { Listbox } from '@headlessui/react'
import fetchModes from './../api/fecthMode';
import { Mode } from '../types/Mode';

interface Props {
  selectedMode: Mode | null;
  onModeChange: (mode: Mode) => void;
}

const CustomDropDown: React.FC<Props> = ({ selectedMode, onModeChange}) => {
  const [modes, setModes] = useState<Mode[]>([]);
 
  const fetchModesFromServer = async () => {
    const modesFromServer = await fetchModes();

    setModes(modesFromServer);

    return modesFromServer;
  };

  
  useEffect(() => {
    fetchModesFromServer();
  }, []);

  return (
    <div className="w-48 p-1">
      <Listbox as="div" className="space-y-1 ">
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button className="block w-full p-2 text-gray-800 border rounded shadow focus:outline-none">
                {selectedMode ? selectedMode.name : 'Pick a mode'}
              </Listbox.Button>
              <Listbox.Options
                as="ul"
                className={`${
                  open ? 'block' : 'hidden'
                } absolute z-10 w-full mt-2 space-y-1 py-2 bg-white border border-gray-300 rounded shadow-lg`}
              >
                {modes.map((mode) => (
                  <Listbox.Option
                    key={mode.id}
                    value={mode}
                    className={({ active, selected }) =>
                      `block px-4 py-2 ${
                        active
                          ? 'bg-blue-100 text-blue-600'
                          : selected
                          ? 'bg-blue-100 text-blue-600 font-semibold'
                          : 'text-gray-700'
                      } cursor-pointer`
                    }
                    onClick={() => onModeChange(mode)}
                  >
                    {mode.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default CustomDropDown;