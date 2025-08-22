import React, { useState,useContext } from 'react';
import CurrencyContext from "../../context/context";


const RangeSlider = ({ min = 0, max = 3000, step = 10 }) => {

  const {  icon,SetMin,SetMax } = useContext(CurrencyContext);


    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
  
    const handleMinChange = (e) => {
      const val = Math.min(Number(e.target.value), maxVal - step);
      setMinVal(val);
      SetMin(val)
    };
  
    const handleMaxChange = (e) => {
      const val = Math.max(Number(e.target.value), minVal + step);
      setMaxVal(val);
      SetMax(val)
    };


  
    return (
      <div className="w-full max-w-md">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Price Range: <span className="font-bold">{icon}{minVal}</span> - <span className="font-bold">{icon}{maxVal}</span>
        </label>
  
        <div className="relative h-6">
          {/* Track */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded transform -translate-y-1/2" />
  
          {/* Range highlight */}
          <div
            className="absolute top-1/2 h-1 bg-blue-500 rounded transform -translate-y-1/2"
            style={{
              left: `${((minVal - min) / (max - min)) * 100}%`,
              right: `${100 - ((maxVal - min) / (max - min)) * 100}%`,
            }}
          />
  
          {/* Min input */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={minVal}
            onChange={handleMinChange}
            className="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full"
          />
  
          {/* Max input */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxVal}
            onChange={handleMaxChange}
            className="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full"
          />
        </div>
  
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{icon} {min}</span>
          <span>{icon} {max}</span>
        </div>
      </div>
    );
};

export default RangeSlider;
