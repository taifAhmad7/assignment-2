import { Slider } from '@mui/material';
import { useState } from 'react';

const Filters = ({ onFilterChange, setShowSidebar }) => {
  const [value, setValue] = useState([0, 1900]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleApplyFilter = () => {
    onFilterChange(value);
  };

  const marks = [
    {
      value: 100,
      label: '100',
    },
    {
      value: 300,
      label: '300',
    },
    {
      value: 500,
      label: '500',
    },
    {
      value: 700,
      label: '700',
    },
    {
      value: 900,
      label: '900',
    },
    {
      value: 1100,
      label: '1100',
    },
    {
      value: 1300,
      label: '1300',
    },
    {
      value: 1500,
      label: '1500',
    },
    {
      value: 1700,
      label: '1700',
    },
  ];
  return (
    <div className="flex flex-col justify-between h-[650px] w-full">
      <div>
        <div className="mb-10">
          <p className="text-gray-500 text-sm">Select Dynasty</p>
          <p>All</p>
        </div>
        <div className="mb-10">
          <p className="text-gray-500 text-sm">Select Period</p>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={1900}
            marks={marks}
            // getAriaValueText={valuetext}
          />
        </div>
        <div className="mb-10">
          <p className="text-gray-500 text-sm">Select material</p>
          <p>All</p>
        </div>
        <div className="mb-10">
          <p className="text-gray-500 text-sm">Select region</p>
          <p>All</p>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={() => setValue([0, 1900])}>Clear all</button>
        <div className="flex gap-x-4">
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-sm text-xs font-semibold px-7 py-2"
            onClick={() => setShowSidebar(false)}
          >
            Close
          </button>
          <button
            onClick={handleApplyFilter}
            className="bg-amber-800 text-amber-100 font-semibold text-xs px-7 py-2 rounded-sm hover:bg-amber-900"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
